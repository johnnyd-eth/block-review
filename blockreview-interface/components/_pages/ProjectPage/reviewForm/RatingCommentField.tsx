import { Form, Input } from "antd";
const { TextArea } = Input

export function RatingCommentField() {
  return (
    <Form.Item name='comment'>
      <TextArea 
        rows={4} 
        maxLength={600} 
        className='text-base text-body placeholder-gray-400'
        placeholder={'What did you like or dislike? Be honest and helpful. The Web3 world is counting on it...'} 
      />
    </Form.Item>
  )
}
