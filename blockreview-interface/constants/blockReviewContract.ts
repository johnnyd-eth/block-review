import { AbiItem } from 'web3-utils'

import BlockReviewContract from '../../backend/artifacts/contracts/BlockReview.sol/BlockReview.json';

export const blockReviewContractAddress = '0xAb67a861f03F1bA94170Ad4976D4C99fBb17c9F5'
export const blockReviewAbi = BlockReviewContract.abi as AbiItem[]
