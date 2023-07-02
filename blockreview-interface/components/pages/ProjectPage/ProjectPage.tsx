import { Project } from "@/models/project";
import { Review } from "@/models/review";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "../../../utils/contracts";
import { getAverageRating } from "../../../utils/reviews";
import { VerifyingModal } from "../../VerifyingModal";
import { HeaderSection } from "./HeaderSection";
import { ReviewsSection } from "./ReviewsSection";

export function ProjectPage({
  project
}: {
  project: Project
}) {
  const [reviewsData, setReviewsData] = useState<Review[]>()

  useEffect(() => {
    if (!reviewsData) {
      getReviews(project.id).then((reviews: Review[]) => {
        setReviewsData(reviews)
      })
    }
  }, [reviewsData, project.id])

  const numReviews = reviewsData?.length ?? 0
  const averageRating = reviewsData && reviewsData.length ? getAverageRating(reviewsData) : 0

  return (
    <div className='flex flex-col items-center justify-between mt-3 w-full'>
      <HeaderSection project={project} numReviews={numReviews} averageRating={averageRating} />
      <ReviewsSection reviewsData={reviewsData} project={project} />
    </div>
  )
}
