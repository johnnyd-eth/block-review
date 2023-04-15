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
      <div className='text-center text-base'>
        <CheckCircleOutlined className='text-6xl text-green-500 mb-10' />
        <div>
          Congratulations! Your review for <strong>{projectName}</strong> has been stored on-chain.
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
