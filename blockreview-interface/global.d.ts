import { EthereumProvider } from 'web3-core';
declare global {
  interface Window {
    ethereum: EthereumProvider;
  }
}

export {};
