import { Project } from "@/models/project";
import { Review } from "@/models/review";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "../contracts";
import { ReviewModal } from "./ReviewModal";

export function ProjectPage({
  project
}: {
  project: Project
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [reviewsData, setReviewsData] = useState<Review[]>()

  useEffect(() => {
    if (!reviewsData) {
      getReviews(project.id).then((reviews: Review[]) => {
        setReviewsData(reviews)
      })
    }
  }, [reviewsData, project.id])

  const submitForm = async (review: Review) => {
    const txReceipt = await addReview({
      projectId: project.id,
      projectContract: project.contractAddress,
      comment: review.comment,
      rating: review.rating,
    })
    console.log('Successfully added review. Tx receipt: ', txReceipt)
  }

  return (
    <div>
      <div>
        <h1>{project.name}</h1>
        <Image src={project.logo} alt={`${project.name} logo`} width={100} height={100} />
        <p>
          {project.description}
        </p>
        <Button onClick={() => setModalOpen(true)}>Make a review</Button>
        <ReviewModal 
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={submitForm}
        />

        <span>Reviews here:</span>
        <div>
          {reviewsData ? reviewsData.map((review: Review) => (
            <div key={review.comment}>
              <h3>{review.comment}</h3>
              <p>{review.rating}</p>
            </div>  
          )) : <></>}
        </div>
      </div>
    </div>
  )
}
