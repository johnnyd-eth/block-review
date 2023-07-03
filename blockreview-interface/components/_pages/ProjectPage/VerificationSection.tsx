import { useWallet } from "@/Wallet"
import WalletButton from "@/components/ui/WalletButton"
import { Project } from "@/models/project"
import { hasInteractedWithContract } from "@/utils/contracts"
import { Spin, Tooltip } from "antd"
import { useState } from "react"
import { CheckCircleIcon, NoSymbolIcon } from '@heroicons/react/24/outline'

export function VerificationSection({ project, setVerified }: { project?: Project, setVerified: (verified: boolean) => void }) {
  const {
    userAddress,
  } = useWallet()

  const [verified, _setVerified] = useState<boolean>()
  const [loading, setLoading] = useState<boolean>(false)

  const subtitle = "Reviews from wallets that have interacted with the project's Ethereum contracts in the last month are marked as verified."
  
  if (!project) return null

  const verifyUser = async () => {
    const result = await hasInteractedWithContract(project.contractAddress)
    setVerified(result)
    _setVerified(result)
    setLoading(false)
  } 

  verifyUser()

  return (
    <div className='flex items-end gap-14 mb-12'>
      <div className="w-2/3">
        <div className='mb-2 font-medium text-gray-600'>Verify as active user</div>
        <div className='text-gray-500 text-sm font-body leading-7'>
          {subtitle}
        </div>
      </div>
      <div className="w-1/3 flex justify-center">
        {!userAddress ? (
          <WalletButton text="Connect wallet" className="py-2.5 px-3.5" />
        ): loading ? (
          <Tooltip title='Verification may take a while! Please be patient.'>
            <Spin size='large' />
          </Tooltip>
        ): verified ? (
          <div className="py-2.5 px-3.5 text-success-800 bg-success-50 rounded-lg flex">
            <CheckCircleIcon className='h-5 w-5 mr-2' />
            Verified
          </div>
        ): (
          <div className="py-2.5 px-3.5 text-failure-800 bg-failure-50 rounded-lg flex cursor-default">
            <NoSymbolIcon className='h-5 w-5 mr-2' />
            Unverified
          </div>
        )} 
      </div>
    </div>
  )
}
