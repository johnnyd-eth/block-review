require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true
    }
  },
  networks: {
    hardhat: {
    },
    matic: {
      // url: "https://polygon-mumbai.infura.io/v3/8abef24d02274e60a1d48a514a720cf9",
      // chainId: 80001,
      url: 'https://polygon-mainnet.infura.io/v3/8abef24d02274e60a1d48a514a720cf9',
      chainId: 137,
      accounts: [process.env.PRIVATE_KEY], 
      gas: "auto",
      gasPrice: 150000000000, // 8 gwei
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
