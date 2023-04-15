import { Review } from "@/models/review"
import { Form, Modal, Input, Spin } from "antd"
import { useState } from "react"
import { useWallet } from "../hooks/Wallet"
import { StarRating } from "./StarRating"

const { TextArea } = Input

export function ReviewModal({
  open,
  onSubmit,
  onClose
}: {
  open: boolean,
  onSubmit: (review: Review) => void
  onClose: () => void
}) {
  const [reviewForm] = Form.useForm<Review>()
  const [loading, setLoading] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(0)

  const {
    userAddress,
  } = useWallet()

  return (
    <Modal
      open={open}
      onOk={() => {
        onSubmit({
          reviewer: userAddress, 
          rating, 
          comment: reviewForm.getFieldValue('comment')
        } as Review)
        setLoading(true)
      }}
      okButtonProps={{ disabled: !userAddress, hidden: loading }}
      cancelButtonProps={{ hidden: loading }}
      onCancel={onClose}
      okText={'Post review'}
      title={loading ? undefined : 'Write review'}
    >
      {loading ?
        <div className='flex justify-center mt-4 py-40'><Spin size="large" /></div>
      :
        <Form form={reviewForm}>
          <div className='mb-10 mt-6'>
            <div className='mb-2 font-medium'>Rating</div>
            <StarRating initialRating={0} onStarClick={setRating} />
          </div>
            <div className='mb-2 font-medium'>Add a description</div>
            <Form.Item name='comment'>
              <TextArea rows={4} maxLength={600}/>
            </Form.Item>
        </Form> 
      }
    </Modal>
  )
}
