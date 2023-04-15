import { Review } from '@/models/review';
import Web3 from 'web3';
import { blockReviewAbi, blockReviewContractAddress } from './blockReviewContract';
import { hasInteractedWithContract } from './utils/hasInteractedWithContract';
import { processReviews } from './utils/reviews';

const walletPrivateKey = process.env.PRIVATE_KEY

// Create a Web3 object and connect to an Ethereum node
export const web3 = new Web3('https://falling-alien-mountain.matic-testnet.discover.quiknode.pro/2e63d1366b2f248777013e46798c2e8fd112546c/');
if (walletPrivateKey) {
  web3.eth.accounts.wallet.add(walletPrivateKey)
}

// Create an instance of the smart contract
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

// Example: Call a read-only function on the contract
export async function getReviews(projectId: number): Promise<Review[]> {
  const result = await contract.methods.getReviews(projectId).call();
  const reviewers = result['0']
  const ratings = result['1']
  const comments = result['2']
  return processReviews(reviewers, ratings, comments)
}

// Example: Call a function that requires a transaction to be sent
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
  if (projectContract) {
    verified = await hasInteractedWithContract(from, projectContract)
    console.log('verified: ', verified)
  }

  if (!verified) {
    console.log('Project not verified')
    return
  }

  const gasLimit = await contract.methods.addReview(projectId, rating, comment).estimateGas({ from })
  const tx = await contract.methods.addReview(projectId, rating, comment).send({ from, gas: gasLimit })
  return tx
}
