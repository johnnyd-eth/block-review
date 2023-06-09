import { Web3Provider } from '@ethersproject/providers'
import { useConnectWallet } from '@web3-onboard/react'
import { useMemo } from 'react'

export function useSigner() {
  const [{ wallet }] = useConnectWallet()
  const signerProvider = useMemo(() => {
    if (!wallet) return undefined
    return new Web3Provider(wallet.provider, 'any')
  }, [wallet])

  const signer = useMemo(() => {
    // If the provider is not available or the chain is unsupported, we
    // shouldn't attempt to do anything
    if (!signerProvider) return undefined
    return signerProvider.getSigner()
  }, [signerProvider])

  return signer
}
