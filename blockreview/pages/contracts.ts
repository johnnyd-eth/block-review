import { Review } from '@/models/review';
import Web3 from 'web3';
import { blockReviewAbi, blockReviewContractAddress } from './blockReviewContract';
import { processReviews } from '../utils/reviews';

let web3: Web3;

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
    'https://falling-alien-mountain.matic-testnet.discover.quiknode.pro/2e63d1366b2f248777013e46798c2e8fd112546c/'
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
  return processReviews(reviewers, ratings, comments)
}

export async function addReview({
  projectId,
  projectContract,
  rating,
  comment
}: {
  projectId: number,
  projectContract: string | undefined,
  rating: number
  comment: string
}) {
  const from = await requestAccount()

  let verified = true

  if (!verified) {
    console.log('Project not verified')
    return
  }

  const gasLimit = await contract.methods.addReview(projectId, rating, comment).estimateGas({ from })
  const tx = await contract.methods.addReview(projectId, rating, comment).send({ from, gas: gasLimit })
  return tx
}
