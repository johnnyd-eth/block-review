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
  curveFinance: {
    id: 11,
    name: 'Curve Finance',
    description: 'Curve is an exchange liquidity pool on Ethereum designed for efficient stablecoin trading.',
    logo: '/assets/project-logos/curveFinance-logo.png',
    url: 'https://curve.fi',
    contractAddress: '0xd533a949740bb3306d119cc777fa900ba034cd52'
  },
  balancer: {
    id: 12,
    name: 'Balancer',
    description: 'Balancer allows anyone to create or add liquidity to customizable pools and earn trading fees.',
    logo: '/assets/project-logos/balancer-logo.png',
    url: 'https://balancer.fi',
    contractAddress: '0xba100000625a3754423978a60c9317c58a424e3d'
  },
  sushiSwap: {
    id: 13,
    name: 'SushiSwap',
    description: 'SushiSwap is an automated market making (AMM) decentralized exchange (DEX) currently on the Ethereum blockchain.',
    logo: '/assets/project-logos/sushiSwap-logo.png',
    url: 'https://sushi.com',
    contractAddress: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2'
  },
  alchemix: {
    id: 14,
    name: 'Alchemix',
    description: 'Alchemix is a future-yield backed synthetic asset platform and community DAO.',
    logo: '/assets/project-logos/alchemix-logo.png',
    url: 'https://alchemix.fi',
    contractAddress: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF'
  },
  bancor: {
    id: 15,
    name: 'Bancor',
    description: 'Bancor is an on-chain liquidity protocol that enables automated, decentralized exchange on Ethereum and across blockchains.',
    logo: '/assets/project-logos/bancor-logo.png',
    url: 'https://bancor.network',
    contractAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c'
  },
  oneinch: {
    id: 16,
    name: '1inch',
    description: '1inch is a decentralized exchange aggregator that sources liquidity from various exchanges to provide the best trade rates.',
    logo: '/assets/project-logos/1inch-logo.png',
    url: 'https://1inch.io',
    contractAddress: '0x111111111117dc0aa78b770fa6a738034120c302'
  },
  pickleFinance: {
    id: 17,
    name: 'Pickle Finance',
    description: 'Pickle Finance is a DeFi protocol aiming to bring stablecoins closer to their pegs by using farming incentives, rewards, and penalties.',
    logo: '/assets/project-logos/pickleFinance-logo.png',
    url: 'https://pickle.finance',
    contractAddress: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5'
  },
  kyberNetwork: {
    id: 18,
    name: 'Kyber Network',
    description: 'Kyber Network is connecting the fragmented tokenized world by enabling instant and seamless transactions between platforms, ecosystems.',
    logo: '/assets/project-logos/kyberNetwork-logo.png',
    url: 'https://kyber.network',
    contractAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200'
  },
  ren: {
    id: 19,
    name: 'Ren',
    description: 'Ren is an open protocol that enables the permissionless and private transfer of value between any blockchain.',
    logo: '/assets/project-logos/ren-logo.png',
    url: 'https://renproject.io',
    contractAddress: '0x408e41876cccdc0f92210600ef50372656052a38'
  },
  yamFinance: {
    id: 20,
    name: 'Yam Finance',
    description: 'Yam Finance is a decentralized cryptocurrency that uses a rebasing mechanism to raise funds for a treasury managed by the community.',
    logo: '/assets/project-logos/yamFinance-logo.png',
    url: 'https://yam.finance',
    contractAddress: '0x0AaCfbeC6a24756c20D41914F2caba817C0d8521'
  },
  ampleforth: {
    id: 21,
    name: 'Ampleforth',
    description: 'Ampleforth is a digital-asset-protocol for smart commodity-money.',
    logo: '/assets/project-logos/ampleforth-logo.png',
    url: 'https://www.ampleforth.org',
    contractAddress: '0xD46bA6D942050d489DBd938a2C909A5d5039A161'
  },
  umaproject: {
    id: 22,
    name: 'UMA',
    description: 'UMA is a decentralized financial contracts platform built to enable Universal Market Access.',
    logo: '/assets/project-logos/umaproject-logo.png',
    url: 'https://umaproject.org',
    contractAddress: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828'
  },
  radicle: {
    id: 23,
    name: 'Radicle',
    description: 'A peer-to-peer stack for code collaboration',
    logo: '/assets/project-logos/radicle-logo.png',
    url: 'https://radicle.xyz/',
    contractAddress: '0x31c8eacbffdd875c74b94b077895bd78cf1e64a3'
  },
  loopring: {
    id: 24,
    name: 'Loopring',
    description: 'Loopring is a decentralized automated execution system that trades across the crypto-token exchanges.',
    logo: '/assets/project-logos/loopring-logo.png',
    url: 'https://loopring.org',
    contractAddress: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD'
  },
  tornadoCash: {
    id: 25,
    name: 'Tornado Cash',
    description: 'A fully decentralized protocol for private transactions on Ethereum.',
    logo: '/assets/project-logos/tornadoCash-logo.png',
    url: 'https://tornado.cash/',
    contractAddress: '0x746a07e1a2ee4059d6f07f740bcca90ec505f3c8'
  },
  thegraph: {
    id: 26,
    name: 'The Graph',
    description: 'The Graph is an indexing protocol for querying networks like Ethereum and IPFS.',
    logo: '/assets/project-logos/thegraph-logo.png',
    url: 'https://thegraph.com',
    contractAddress: '0xc944e90c64b2c07662a292be6244bdf05cda44a7'
  },
  dydx: {
    id: 27,
    name: 'dYdX',
    description: 'dYdX is a protocol that allows users to trade and lend any Ethereum token.',
    logo: '/assets/project-logos/dydx-logo.png',
    url: 'https://dydx.exchange',
    contractAddress: '0x92d6c1e31e14520e676a687f0a93788b716beff5'
  },
  badgerdao: {
    id: 28,
    name: 'Badger DAO',
    description: 'Badger DAO is a decentralized autonomous organization (DAO) built to bring Bitcoin to DeFi.',
    logo: '/assets/project-logos/badgerdao-logo.webp',
    url: 'https://badger.finance',
    contractAddress: '0x3472a5a71965499acd81997a54bba8d852c6e53d'
  },
  hegic: {
    id: 29,
    name: 'Hegic',
    description: 'Hegic is an on-chain options trading protocol on Ethereum.',
    logo: '/assets/project-logos/hegic-logo.webp',
    url: 'https://www.hegic.co',
    contractAddress: '0x584bC13c7D411c00c01A62e8019472dE68768430'
  },
  mirrorprotocol: {
    id: 30,
    name: 'Mirror Protocol',
    description: 'Mirror Protocol allows the creation of fungible assets, "synthetics", that track the price of real world assets.',
    logo: '/assets/project-logos/mirrorprotocol-logo.png',
    url: 'https://mirror.finance',
    contractAddress: '0x09a3ecafa817268f77be1283176b946c4ff2e608'
  },
  creamfinance: {
    id: 31,
    name: 'Cream Finance',
    description: 'Cream Finance is a decentralized peer to peer lending platform.',
    logo: '/assets/project-logos/creamfinance-logo.png',
    url: 'https://cream.finance',
    contractAddress: '0x2ba592f78db6436527729929aaf6c908497cb200'
  },
  rarible: {
    id: 32,
    name: 'Rarible',
    description: 'Rarible is a software allowing digital artists and creators to issue and sell custom crypto assets that represent ownership in their digital work.',
    logo: '/assets/project-logos/rarible-logo.png',
    url: 'https://rarible.com',
    contractAddress: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf'
  },
  opensea: {
    id: 33,
    name: 'OpenSea',
    description: 'OpenSea is a marketplace for crypto collectibles and non-fungible tokens (NFTs).',
    logo: '/assets/project-logos/opensea-logo.png',
    url: 'https://opensea.io',
    contractAddress: '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b'
  },
  ensdomains: {
    id: 34,
    name: 'ENS Domains',
    description: 'Ethereum Name Service (ENS) offers a secure & decentralized way to address resources both on and off the blockchain using simple, human-readable names.',
    logo: '/assets/project-logos/ensdomains-logo.png',
    url: 'https://ens.domains',
    contractAddress: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85'
  },
  nexusmutual: {
    id: 35,
    name: 'Nexus Mutual',
    description: 'Nexus Mutual offers a decentralized alternative to insurance.',
    logo: '/assets/project-logos/nexusmutual-logo.png',
    url: 'https://nexusmutual.io',
    contractAddress: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b'
  },
  mstable: {
    id: 36,
    name: 'mStable',
    description: 'mStable unites stablecoins, lending and swapping into one standard.',
    logo: '/assets/project-logos/mstable-logo.png',
    url: 'https://mstable.org',
    contractAddress: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2'
  },
  keepnetwork: {
    id: 37,
    name: 'Keep Network',
    description: "Keep Network's off-chain containers for private data, known as keeps, help contracts harness the full power of the public blockchain.",
    logo: '/assets/project-logos/keepnetwork-logo.png',
    url: 'https://keep.network',
    contractAddress: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec'
  },
  augur: {
    id: 38,
    name: 'Augur',
    description: 'Augur is a decentralized oracle and peer to peer protocol for prediction markets.',
    logo: '/assets/project-logos/augur-logo.png',
    url: 'https://www.augur.net',
    contractAddress: '0x221657776846890989a759ba2973e427dff5c9bb'
  },
  gelato: {
    id: 39,
    name: 'Gelato Network',
    description: 'Gelato Network is the first protocol that automates smart contract executions on Ethereum, enabling developers to create more complex dApps.',
    logo: '/assets/project-logos/gelato-logo.png',
    url: 'https://www.gelato.network',
    contractAddress: '0x3b44e6d4d076462a3bb777744b6688032b50076a'
  },
  gnosis: {
    id: 40,
    name: 'Gnosis',
    description: 'Gnosis builds new market mechanisms to enable the distribution of resources—from assets to incentives, and information to ideas.',
    logo: '/assets/project-logos/gnosis-logo.png',
    url: 'https://gnosis.io',
    contractAddress: '0x6810e776880c02933d47db1b9fc05908e5386b96'
  },
  usdc: {
    id: 41,
    name: 'USD Coin (USDC)',
    description: 'USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin. It is pegged to the US Dollar and maintains a 1-to-1 ratio with the US Dollar in terms of value.',
    logo: '/assets/project-logos/usdc-logo.png',
    url: 'https://www.centre.io/usdc',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  },
  dai: {
    id: 42,
    name: 'Dai',
    description: 'Dai is a stablecoin that aims to keep its value as close to one United States dollar (USD) as possible through an automated system of smart contracts on the Ethereum blockchain.',
    logo: '/assets/project-logos/dai-logo.png',
    url: 'https://makerdao.com/en/dai/',
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f'
  },
  wbtc: {
    id: 43,
    name: 'Wrapped Bitcoin (WBTC)',
    description: 'Wrapped Bitcoin (WBTC) is an ERC-20 token that represents Bitcoin (BTC) on the Ethereum blockchain.',
    logo: '/assets/project-logos/wbtc-logo.png',
    url: 'https://www.wbtc.network/',
    contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
  },
}
