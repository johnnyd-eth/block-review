import { Review } from "@/models/review";
import { StarRating } from "./StarRating";

export function ReviewCard({review}: {review: Review}) {
  return (
    <div className='border border-solid border-grey-200 rounded-lg px-10 py-8 mt-10 bg-white'>
      <div className='border-b border-solid border-grey-200 pb-5'>
        <div className='text-lg font-bold'>
          {review.reviewer}
        </div>
      </div>
      <div className='mt-6'>
        <StarRating initialRating={review.rating}/>
      </div>
      <h3 className='mt-9'>{review.comment}</h3>
    </div>  
  )
}
