import { Modal } from "antd"
import { CheckCircleOutlined } from '@ant-design/icons'

export function SuccessModal({
  txLink,
  projectName,
  onClose
}: {
  txLink: string
  projectName: string
  onClose: VoidFunction
}) {
  return (
    <Modal
      open
      onCancel={onClose}
      cancelButtonProps={{ hidden: true }}
      okButtonProps={{ hidden: true }}
    >
      <div className='flex flex-col justify-center items-center text-base gap-4 text-center pt-10'>
        <img src="/assets/success.png" alt="Success emoji" height={100} width={100} />
        <div>
        <div className='text-2xl font-medium mt-3 mb-2'>
          Success!
        </div>
          <div>
            Your review for <strong>{projectName}</strong> has been stored on-chain. Thanks for helping out the Web3 community.
          </div>
        </div>
        <div className='mt-4'>
          <a href={txLink} target='_blank' className='underline hover:underline text-lg'>
            View the tx on PolygonScan
          </a>
        </div>
      </div>
    </Modal>
  )
}
