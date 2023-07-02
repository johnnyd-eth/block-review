import { Review } from "@/models/review";
import { ReviewCard } from "./ReviewCard";
import { WriteReviewCard } from "./WriteReviewCard";
import { Project } from "@/models/project";

export function ReviewsSection({
  reviewsData,
  project
}: {
  reviewsData: Review[] | undefined
  project: Project
}) {
  return (
    <section className='bg-gray-50 pt-5 bg-gray-50 pb-20 w-full flex flex-col items-center'>
      <div className='max-w-3xl w-full'>
        <WriteReviewCard project={project} />
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
