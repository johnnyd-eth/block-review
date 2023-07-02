import { Review } from '@/models/review';
import Web3 from 'web3';
import { blockReviewAbi, blockReviewContractAddress } from '../constants/blockReviewContract';
import { getTransactionLink, processReviews } from './reviews';
let web3: Web3;

// Connect to polygon mainnet blockchain
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);

  // Request account access if needed
  window.ethereum.enable().catch((error: string) => {
    console.error('User denied account access:', error);
  })
} else {
  console.log('using fallback')
  // Use a fallback provider if MetaMask is not installed
  const provider = new Web3.providers.HttpProvider(
    // 'https://falling-alien-mountain.matic-testnet.discover.quiknode.pro/2e63d1366b2f248777013e46798c2e8fd112546c/'
    'https://polygon-mainnet.infura.io/v3/8abef24d02274e60a1d48a514a720cf9',
  );
  web3 = new Web3(provider);
}

// Create an instancexe of the smart contract
const contract = new web3.eth.Contract(blockReviewAbi, blockReviewContractAddress);

async function requestAccount(): Promise<string> {
  if (typeof window === 'undefined' || !window.ethereum) {
    console.error('No Ethereum provider found');
    throw new Error('No Ethereum provider found');
  }
  console.log('window.ethereum: ', window.ethereum)
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0]
}

// Sees if a walletAddress has interacted with a contractAddress in the last 7 days
export async function hasInteractedWithContract(contractAddress: string) {
  const walletAddress = await requestAccount()
  contractAddress = contractAddress.toLowerCase();

  const latestBlock = await web3.eth.getBlockNumber();
  const blocksPerRequest = 10000; 
  const blocksPerDay = 24 * 60 * 60 / 15;

  let fromBlock = latestBlock - (blocksPerDay * 31);
  let toBlock = fromBlock + blocksPerRequest;

  const eventSignatures = contract.options.jsonInterface
    .filter((item) => item.type === 'event')
    .map((item) => web3.eth.abi.encodeEventSignature(item));

  while (fromBlock < latestBlock) {
    const logs = await web3.eth.getPastLogs({
      fromBlock: fromBlock,
      toBlock: Math.min(toBlock, latestBlock),
      address: contractAddress,
      topics: [eventSignatures],
    });
    
    const userLogs = logs.filter((log) => {
      const topicsLength = log.topics.length
      const userAddressTopic = log.topics[topicsLength - 1]; 
      const userAddress = web3.eth.abi.decodeParameter('address', userAddressTopic);
      return userAddress.toLowerCase() === walletAddress.toLowerCase();
    });

    if (userLogs.length > 0) {
      return true;
    }

    fromBlock = toBlock + 1;
    toBlock = fromBlock + blocksPerRequest;
  }

  return false;
}

export async function getReviews(projectId: number): Promise<Review[]> {
  const result = await contract.methods.getReviews(projectId).call();
  const reviewers = result['0']
  const ratings = result['1']
  const comments = result['2']
  const verifiedStatuses = result['3']
  const timestamps = result['4']
  const transactionHashes = result['5']

  return processReviews(
    reviewers, 
    ratings, 
    comments, 
    verifiedStatuses, 
    timestamps, 
    transactionHashes.map((hash: string) => getTransactionLink(hash))
  );
}

export async function addReview({
  projectId,
  rating,
  comment,
  verified = false,
}: {
  projectId: number,
  rating: number
  comment: string
  verified?: boolean
}) {
  const from = await requestAccount()
  
  const gasLimit = await contract.methods.addReview(projectId, rating, comment, verified).estimateGas({ from })
  const gasPrice = await web3.eth.getGasPrice()

  const gasPriceBN = web3.utils.toBN(gasPrice);
  const increasedGasPrice = gasPriceBN.mul(web3.utils.toBN(2)).toString(); // Increase the gas price by a factor of 2.

  const tx = await contract.methods.addReview(projectId, rating, comment, verified).send({ from, gas: gasLimit, gasPrice: increasedGasPrice })
  return tx
}





