import { web3 } from "../contracts";

export async function hasInteractedWithContract(walletAddress: string, contractAddress: string) {
  const transactionCount = await web3.eth.getTransactionCount(walletAddress, 'latest');
  for (let i = 0; i < transactionCount; i++) {
    const transaction = await web3.eth.getTransactionFromBlock('latest', i);
    if (transaction && transaction.to && transaction.to.toLowerCase() === contractAddress.toLowerCase()) {
      return true;
    }
  }
  return false;
}






