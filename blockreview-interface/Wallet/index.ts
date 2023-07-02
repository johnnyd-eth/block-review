import { useConnectWallet } from '@web3-onboard/react'
import {
  useDisconnect,
  useIsConnected,
  useSigner,
  useUserAddress,
} from './hooks'

export function useWallet() {
  const signer = useSigner()
  const userAddress = useUserAddress()
  const isConnected = useIsConnected()

  const [, connect] = useConnectWallet()
  const disconnect = useDisconnect()

  return {
    signer,
    userAddress,
    isConnected,
    connect,
    disconnect,
  }
}

export type Wallet = ReturnType<typeof useWallet>
