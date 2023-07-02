import { reviewCardContainerStyles } from "./ReviewCard";
import { StarRating } from "../../ui/StarRating";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";
import { useReviewForm } from "./hooks/reviewForm";
import { RatingCommentField } from "./reviewForm/RatingCommentField";
import { Project } from "@/models/project";

export function WriteReviewCard({ project }: { project: Project }) {
  const [rating, setRating] = useState<number>(0)
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false)

  const { setReviewFormValue } = useReviewForm()

  const handleStarClick = (rating: number) => {
    setReviewFormValue('rating', rating)
    setRating(rating)
    setReviewModalOpen(true)

  }
  
  return (
    <>
      <div 
        className={`${reviewCardContainerStyles} cursor-pointer pt-6 flex flex-col gap-7 transition-all ease-in-out duration-200 transform hover:scale-105 hover:shadow-lg`} 
        onClick={() => setReviewModalOpen(true)}
      >
        <div className='text-xl font-medium text-gray-900'>
          Write a review
        </div>
        <div className='mb-3'>
          <StarRating initialRating={0} onStarClick={handleStarClick} />
        </div>
        <RatingCommentField />
      </div>
      {reviewModalOpen ? 
        <ReviewModal
          open={reviewModalOpen}
          onClose={() => setReviewModalOpen(false)}
          initialRating={rating}
          project={project}
        />
      : null }
    </>
  )
}
