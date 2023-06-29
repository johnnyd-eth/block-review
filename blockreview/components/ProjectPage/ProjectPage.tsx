import { Project } from "@/models/project";
import { Review } from "@/models/review";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "../../pages/contracts";
import { useWallet } from "../../Wallet";
import { getAverageRating } from "../../utils/reviews";
import { ReviewCard } from "../ReviewCard";
import { ReviewModal } from "../ReviewModal";
import { StarRating } from "../StarRating";
import { SuccessModal } from "../SuccessModal";
import { VerifyingModal } from "../VerifyingModal";
import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/outline";
import { withoutHttp } from "@/utils/links";
import { HeaderSection } from "./HeaderSection";
import { ReviewsSection } from "./ReviewsSection";

export function ProjectPage({
  project
}: {
  project: Project
}) {
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false)
  const [verifyingModalOpen, setVerifyingModalOpen] = useState<boolean>(false)
  const [successModalOpen, setSuccessModalOpen] = useState<boolean>(false)
  const [txLink, setTxLink] = useState<string>()
  
  const [reviewsData, setReviewsData] = useState<Review[]>()

  useEffect(() => {
    if (!reviewsData) {
      getReviews(project.id).then((reviews: Review[]) => {
        setReviewsData(reviews)
      })
    }
  }, [reviewsData, project.id])

  const submitForm = async (review: Review) => {
    console.log('submitForm')
    const txReceipt = await addReview({
      projectId: project.id,
      projectContract: project.contractAddress,
      comment: review.comment,
      rating: review.rating,
    })
    console.log('Successfully added review. Tx receipt: ', txReceipt)
    setTxLink(`https://mumbai.polygonscan.com/tx/${txReceipt.transactionHash}`)
    setReviewModalOpen(false)
    setSuccessModalOpen(true)
  }

  const numReviews = reviewsData?.length ?? 0
  const averageRating = reviewsData && reviewsData.length ? getAverageRating(reviewsData) : 0

  return (
    <div className='mt-3 w-full'>
      <HeaderSection project={project} numReview={numReviews} averageRating={averageRating} />
      <ReviewsSection reviewsData={reviewsData} />
      <ReviewModal 
        open={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onSubmit={submitForm}
      />
      {verifyingModalOpen ?
        <VerifyingModal 
          projectName={project.name}
          contract={project.contractAddress}
          onSuccess={() => {
            setVerifyingModalOpen(false)
            setReviewModalOpen(true)
          }}
          onClose={() => setVerifyingModalOpen(false)}
        />
      : null}
      {successModalOpen && txLink ?
        <SuccessModal 
          txLink={txLink}
          onClose={() => setSuccessModalOpen(false)}
          projectName={project.name}
        />
      : null }
    </div>
  )
}
