import { Review } from "@/models/review";
import { StarRating } from "../../ui/StarRating";
import { VerifiedReviewBadge } from "@/components/ui/VerifiedReviewBadge";
import EthereumAddress from "@/components/ui/EthereumAddress";
import { ReviewTimeAndLink } from "@/components/ui/ReviewTimeAndLink";

export const reviewCardContainerStyles = 'border border-solid border-gray-200 rounded-lg px-10 py-8 mt-10 bg-white'

export function ReviewCard({review}: {review: Review}) {
  return (
    <div className={reviewCardContainerStyles}>
      <div className='border-b border-solid border-gray-200 pb-5 flex items-center justify-between'>
        <div className='text-2xl font-bold'>
          <EthereumAddress address={review.reviewer} />
        </div>
        {review.verified ? <VerifiedReviewBadge /> : null }
      </div>
      <div className='mt-6 flex items-center justify-between'>
        <StarRating initialRating={review.rating} />
        <ReviewTimeAndLink timestamp={review.timestamp} />
      </div>
      <p className='mt-9 leading-7'>{review.comment}</p>
    </div>
  )
}
