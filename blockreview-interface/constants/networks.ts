import { NetworkName } from '../models/networkName'

const infuraId = '8abef24d02274e60a1d48a514a720cf9'

type NetworkInfo = {
  name: NetworkName
  label: string
  token?: string
  color: string
  chainId: number
  blockExplorer: string
  rpcUrl: string
  faucet?: string
  price?: number
  gasPrice?: number
}

let hostname = 'localhost'
if (typeof window !== 'undefined') {
  hostname = window.location.hostname
}

export const NETWORKS: Record<number, NetworkInfo> = {
  31337: {
    name: NetworkName.localhost,
    label: 'Local Host',
    color: '#666666',
    chainId: 31337,
    blockExplorer: '',
    rpcUrl: `http://${hostname}:8545`,
  },
  1: {
    name: NetworkName.mainnet,
    label: 'Ethereum Mainnet',
    color: '#ff8b9e',
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
    blockExplorer: 'https://etherscan.io/',
  },
  5: {
    name: NetworkName.polygon,
    label: 'Polygon Mainnet',
    color: '#0975F6',
    chainId: 137,
    blockExplorer: 'https://polygonscan.com/',
    rpcUrl: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
  },
}

export const NETWORKS_BY_NAME = Object.values(NETWORKS).reduce(
  (acc, curr) => ({
    ...acc,
    [curr.name]: curr,
  }),
  {} as Record<NetworkName, NetworkInfo>,
)

export const readNetwork = NETWORKS_BY_NAME['mainnet']
  // NETWORKS_BY_NAME[process.env.NEXT_PUBLIC_INFURA_NETWORK]
