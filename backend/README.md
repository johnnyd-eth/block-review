## Contracts

Current Polygon mainnet contract: 0xAb67a861f03F1bA94170Ad4976D4C99fBb17c9F5

# Setup

1. In `backend`, make an `.env` file with your wallet's private key and Etherscan API key

# Deploy new contract

1. Make changes to `contracts/BlockReview.sol`
2. In `backend` dir, run `npx hardhat compile`
3. Then `npx hardhat run --network matic scripts/deploy.js`
4. Get the new contract address from the console, copy it above and into `blockReviewContractAddress` inside `blockreview-interface/constants/blockReviewContract`
5. Verify the contract with `npx hardhat verify --network matic <NEW_CONTRACT_ADDRESS>`
