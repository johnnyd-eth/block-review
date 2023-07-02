import '@/styles/globals.css'
import { init } from '@web3-onboard/react'
import 'antd/dist/reset.css'
import type { AppProps } from 'next/app'
import { CoreAppWrapper } from '../components/CoreAppWrapper'
import injectedModule from '@web3-onboard/injected-wallets'

const polygonNetwork = {
  token: 'MATIC',
  label: 'Polygon',
  id: 80001,
  rpcUrl: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
}

const injected = injectedModule()

init({
  wallets: [
    injected,
  ],
  chains: [
    polygonNetwork
  ],
  appMetadata: {
    icon: '/assets/blockreview-logo-small.png',
    logo: '/assets/blockreview-logo1.png',
    name: 'Blockreview',
    description: 'Trustless on-chain reviews.',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return <CoreAppWrapper>
    <Component {...pageProps} />
  </CoreAppWrapper>
}
