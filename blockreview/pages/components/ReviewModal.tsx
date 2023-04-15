import { Review } from "@/models/review"
import { Form, InputNumber, Modal, Input } from "antd"
import { useWallet } from "../hooks/Wallet"

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
  const {
    userAddress,
  } = useWallet()

  return (
    <Modal
      open={open}
      onOk={() => {
        onSubmit(reviewForm.getFieldsValue(true))
      }}
      okButtonProps={{ disabled: !userAddress}}
      onCancel={onClose}
      title={'Make a review'}
    >
      <Form form={reviewForm}>
        <Form.Item name='rating'>
          <InputNumber min={1} max={5} step={1} />
        </Form.Item>
        <Form.Item name='comment'>
          <TextArea rows={4} maxLength={256}/>
        </Form.Item>
      </Form>
    </Modal>
  )
}
