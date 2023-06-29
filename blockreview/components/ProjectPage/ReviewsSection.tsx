import { Review } from "@/models/review";
import { ReviewCard } from "../ReviewCard";

export function ReviewsSection({
  reviewsData
}: {
  reviewsData: Review[] | undefined
}) {
  return (
    <section className='bg-gray-50 pt-5 bg-gray-50 pb-20'>
      <div className='max-w-5xl'>
        <div className='w-full'>
          {reviewsData && reviewsData.length ? [...reviewsData].reverse().map((review: Review) => (
            <ReviewCard key={review.id} review={review} />
          )) 
          : <div className='mt-10 text-lg'>No reviews yet!</div>}
        </div>
      </div>
    </section>
  )
}
