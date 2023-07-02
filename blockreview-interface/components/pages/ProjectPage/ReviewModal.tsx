import { Review } from "@/models/review"
import { Form, Modal, Spin } from "antd"
import { useState } from "react"
import { useWallet } from "../../../Wallet"
import { StarRating } from "../../ui/StarRating"
import { useReviewForm } from "./hooks/reviewForm"
import { RatingCommentField } from "./reviewForm/RatingCommentField"
import { VerificationSection } from "./VerificationSection"
import { Project } from "@/models/project"
import { addReview } from "@/utils/contracts"
import { SuccessModal } from "@/components/SuccessModal"

export function ReviewModal({
  open,
  onClose,
  initialRating,
  project,
}: {
  open: boolean,
  onClose: () => void
  initialRating: number
  project?: Project
}) {
  const { reviewForm, setReviewFormValue } = useReviewForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [verified, setVerified] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(initialRating)
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false)
  const [txLink, setTxLink] = useState<string>('')

  const {
    userAddress,
  } = useWallet()

  if (!project) return null


  const onSubmit = async (review: Review) => {
    setLoading(true)
    const newReview = {
      projectId: project.id,
      comment: review.comment,
      rating,
      verified,
    }
    const txReceipt = await addReview(newReview)
    setLoading(false)
    console.log('Successfully added review. Tx receipt: ', txReceipt)
    setTxLink(`https://polygonscan.com/tx/${txReceipt.transactionHash}`)
    setSuccessModalOpen(true)
  }
  if (successModalOpen) {
    return (
      <SuccessModal txLink={txLink} onClose={() => setSuccessModalOpen(false)} projectName={project.name}/>
    )
  }

  return (
    <Modal
      open={open}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={onClose}
      title={loading ? undefined : 'Write review'}
      width={592}
    >
      {loading ?
        <div className='flex justify-center mt-4 py-40'><Spin size="large" /></div>
      :
        <div>
          <div className='text-gray-500 text-sm font-body'>
            Rate this project and let the community know about your experience.
          </div>
          <Form form={reviewForm}>
            <div className='mb-10 mt-6'>
              <div className='mb-2 font-medium text-gray-900'>Rating</div>
              <StarRating initialRating={initialRating} onStarClick={(_rating) => {
                setReviewFormValue('rating', _rating)
                setRating(_rating)
              }} />
            </div>
            <div className='mb-2 font-medium text-gray-900'>Add a description</div>
            <RatingCommentField />
          </Form> 
          <VerificationSection project={project} setVerified={setVerified} />
          <button 
            className="py-2.5 px-9 bg-swatch-400 hover:bg-swatch-500 text-white rounded-lg font-body text-base"
            onClick={() => onSubmit({
                reviewer: userAddress, 
                rating, 
                comment: reviewForm.getFieldValue('comment')
              } as Review
            )}
          >
            {loading ? <Spin size='small' className="text-white" /> : 'Post review'}
          </button>
        </div>
      }
    </Modal>
  )
}
