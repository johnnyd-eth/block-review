import { Review } from "@/models/review"
import { Form, Modal, Input } from "antd"
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

      }}
      okButtonProps={{ disabled: !userAddress}}
      onCancel={onClose}
      title={'Write review'}
    >
      <Form form={reviewForm}>
        <div className='w-36 mb-10 mt-6'>
          <div className='mb-2 font-medium'>Rating</div>
          <StarRating initialRating={0} />
        </div>
          <div className='mb-2 font-medium'>Add a description</div>
          <Form.Item name='comment'>
            <TextArea rows={4} maxLength={256}/>
          </Form.Item>

      </Form>
    </Modal>
  )
}
