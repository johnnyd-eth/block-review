import { Project } from "@/models/project";
import { Review } from "@/models/review";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { addReview, getReviews } from "../contracts";
import { useWallet } from "../hooks/Wallet";
import { getAverageRating } from "../utils/reviews";
import { ReviewCard } from "./ReviewCard";
import { ReviewModal } from "./ReviewModal";
import { StarRating } from "./StarRating";
import { SuccessModal } from "./SuccessModal";
import { VerifyingModal } from "./VerifyingModal";

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

  const {
    userAddress,
    connect
  } = useWallet()

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
    <div>
      <section className='px-20 pt-12 pb-10'>
        <div className='flex justify-between items-center'>
          {/* LOGO, name, averageRating */}
          <div className='flex justify-between'>
            <div className='pr-7'>
              <img src={project.logo} alt={`${project.name} logo`} width={112} height={112} />
            </div>
            <div>
              <h1 className='text-4xl mb-2'>{project.name}</h1>
              <div style={{ marginLeft: '-7px' }}>
                <StarRating initialRating={averageRating} />
              </div>
              <div className='text-gray-400 text-xs mt-4 ml-1'>
                <span>{averageRating.toFixed(2)} rating  |  {numReviews} reviews </span>
              </div>
            </div>
          </div>
          <Button onClick={() => {
            if (userAddress) {
              setVerifyingModalOpen(true)
            } else {
              connect()
            }
          }} className='bg-blue-500 hover:bg-blue-600 text-white hover:text-white rounded-lg px-5 py-3 h-14 text-lg'>
            <span>Write review</span>
          </Button>
        </div>
      </section>
      <section className='px-20 pt-5 bg-gray-50 pb-20'>
        <div>
          {reviewsData && reviewsData.length ? [...reviewsData].reverse().map((review: Review) => (
            <ReviewCard key={review.id} review={review} />
          )) 
          : <div className='mt-10 text-lg'>No reviews yet!</div>}
        </div>
      </section>
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
