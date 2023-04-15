import { Modal, Spin } from "antd"
import { useState } from "react"
import { hasInteractedWithContract } from "../contracts"
import { StopOutlined } from '@ant-design/icons'

export function VerifyingModal({
  contract,
  projectName,
  onSuccess,
  onClose
}: {
  contract: string
  projectName: string
  onSuccess: VoidFunction
  onClose: VoidFunction
}) {
  const [result, setResult] = useState<string>('loading')

  const verifyUser = async () => {
    const result = await hasInteractedWithContract(contract)
    console.log('result: ',result)
    if (result) {
      onSuccess()
    } else {
      setResult('fail')
    }
  } 

  verifyUser()

  return (
    <Modal
      open
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      destroyOnClose
      onCancel={onClose}
    >
      {result === 'loading' ?
        <div className='text-center text-lg'>
          <div className='flex w-full justify-center py-10'>
            <Spin size='large' />
          </div>
          <div className='mt-2'>
            Verifying that you are an active user of the {projectName} contract!
          </div>
        </div>
      : result === 'fail' ?
        <div className='py-10 flex flex-col justify-center items-center text-lg'>
          <StopOutlined className='text-6xl mb-10 text-red-500' />
          <div>You are not an active user of this contract.</div>
          <div className='mt-2'>You cannot write a review.</div>
        </div>
      : null } 
    </Modal>
  )
}
