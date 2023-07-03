import { Project } from "@/models/project";
import { blockReviewContractAddress } from "./constants/blockReviewContract";

export const PROJECT_DATA: Record<string, Project> = {
  juicebox: {
    id: 1,
    name: 'Juicebox',
    description: 'The programmable crypto fundraising protocol for builders and creators. Light enough for a group of friends, powerful enough for a global network of anons. Community-owned, on Ethereum.',
    logo: '/assets/project-logos/juicebox-logo.png',
    url: 'https://juicebox.money',
    contractAddress: '0xd4F10C2A2b0a997E42D9f7c56D0b1df1fF4504FF'
  },
  blockReview: {
    id: 2,
    name: 'Blockreview',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/project-logos/blockreview-logo-small.png',
    url: 'https://blockreview.gg',
    contractAddress: blockReviewContractAddress
  },
  polygon: {
    id: 3,
    name: 'Polygon',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/project-logos/polygon-logo.png',
    contractAddress: '0xd4F10C2A2b0a997E42D9f7c56D0b1df1fF4504FF'
  },
  uniswap: {
    id: 4,
    name: 'Uniswap',
    description: 'Uniswap is a protocol for automated token exchange on Ethereum. It is designed around ease of use, gas efficiency, censorship resistance, and zero rent extraction.',
    logo: '/assets/project-logos/uniswap-logo.png',
    url: 'https://uniswap.org',
    contractAddress: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
  },
  compound: {
    id: 5,
    name: 'Compound',
    description: 'Compound is an algorithmic, autonomous interest rate protocol built for developers, to unlock a universe of open financial applications.',
    logo: '/assets/project-logos/compound-logo.png',
    url: 'https://compound.finance',
    contractAddress: '0xc00e94cb662c3520282e6f5717214004a7f26888'
  },
  chainlink: {
    id: 6,
    name: 'Chainlink',
    description: 'Chainlink is a decentralized oracle network which aims to connect smart contracts with data from the real world.',
    logo: '/assets/project-logos/chainlink-logo.png',
    url: 'https://chain.link',
    contractAddress: '0x514910771af9ca656af840dff83e8264ecf986ca'
  },
  makerDAO: {
    id: 7,
    name: 'MakerDAO',
    description: 'MakerDAO is a decentralized organization dedicated to bringing stability to the crypto economy. MakerDAO issues Dai, the world’s first decentralized stablecoin on the Ethereum blockchain.',
    logo: '/assets/project-logos/makerDAO-logo.png',
    url: 'https://makerdao.com',
    contractAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
  },
  aave: {
    id: 8,
    name: 'Aave',
    description: 'Aave is an open source and non-custodial protocol enabling the creation of money markets. Users can earn interest on deposits and borrow assets.',
    logo: '/assets/project-logos/aave-logo.png',
    url: 'https://aave.com',
    contractAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
  },
  yearnFinance: {
    id: 9,
    name: 'Yearn Finance',
    description: 'Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield farming, and insurance on the Ethereum blockchain.',
    logo: '/assets/project-logos/yearnFinance-logo.png',
    url: 'https://yearn.finance',
    contractAddress: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e'
  },
  synthetix: {
    id: 10,
    name: 'Synthetix',
    description: 'Synthetix is a crypto-backed synthetic asset platform that provides on-chain exposure to real-world currencies, commodities, stocks, and indices. ',
    logo: '/assets/project-logos/synthetix-logo.png',
    url: 'https://www.synthetix.io',
    contractAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f'
  },
}
