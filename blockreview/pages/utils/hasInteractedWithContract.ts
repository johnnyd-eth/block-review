// import { web3 } from "../contracts";

// export async function hasInteractedWithContract(walletAddress: string, contractAddress: string) {
//   const interactionFound = false;
//   const step = 1000;
//   const latestBlock = await web3.eth.getBlockNumber();
//   const blocksPerDay = 24 * 60 * 60 / 15;

//   // check for interactions in the last 7 days 
//   const startBlock = latestBlock - (blocksPerDay * 7);
//   const endBlock = latestBlock;
//   console.log('before for')
//   for (let i = startBlock; i <= endBlock; i += step) {
//     const to = Math.min(i + step - 1, endBlock);

//     const events = await web3.eth.getPastLogs({
//       fromBlock: i,
//       toBlock: to,
//       address: walletAddress,
//       topics: [],
//     });
//     for (const event of events) {
//       if (event.address.toLowerCase() === contractAddress.toLowerCase() &&
//           ((event as any).from.toLowerCase() === contractAddress.toLowerCase() ||
//           (event as any).to.toLowerCase() === contractAddress.toLowerCase())) {
//         return true;
//       }
//     }
//   }
//   return interactionFound
// }






