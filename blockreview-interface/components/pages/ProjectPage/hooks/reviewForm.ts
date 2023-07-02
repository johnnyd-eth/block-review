import { useState } from "react"
import { Form } from "antd"
import { Review } from "@/models/review"

export function useReviewForm() {
  const [reviewForm] = Form.useForm<Review>()

  // const [reviewData, setReviewData] = useState<Review>({
  //   reviewer: '',
  //   rating: 0,
  //   comment: '',
  //   verified: false,
  // })

  const setReviewFormValue = (field: keyof Review, value: any) => {
    reviewForm.setFieldsValue({ [field]: value })
    // setReviewData(prevData => ({ ...prevData, [field]: value }))
  }

  return { reviewForm, setReviewFormValue }
}
