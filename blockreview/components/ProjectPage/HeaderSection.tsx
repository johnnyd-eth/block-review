import { LinkIcon } from "@heroicons/react/24/outline";
import { StarRating } from "../StarRating";
import { withoutHttp } from "@/utils/links";
import { Project } from "@/models/project";

export function HeaderSection({
  project,
  numReviews,
  averageRating,
}: {
  project: Project
  numReview: number
  averageRating: number
}) {

  return (
    <section className='px-20 pt-12 pb-10 max-w-6xl'>
      <div className='flex justify-between items-start'>
        {/* LOGO, name, averageRating */}
        <div className='flex justify-between'>
          <div className='pr-7'>
            <img src={project.logo} alt={`${project.name} logo`} width={176} height={176} />
          </div>
          <div className='h-full py-5 flex flex-col gap-3'>
            <div className='flex items-center gap-5 mb-1 -mt-2'>
              <h1 className='text-4xl mb-0'>{project.name}</h1>
              <img src='/assets/badge.png' alt='Verified project badge' width={26} height={26} />
            </div>
            <StarRating initialRating={averageRating} />
            <div className='text-gray-400 text-base mt-6 ml-1 flex gap-4'>
              <span>{averageRating.toFixed(2)} rating</span>
              <span>|</span>
              <span> {numReviews} reviews </span>
            </div>
          </div>
        </div>
        {/* Link to website */}
        <a href={project.url} target="_blank" className='text-gray-600 flex gap-3 items-center mt-8'>
          <LinkIcon className='h-5 w-5' />
          <span className="hover:underline">{withoutHttp(project.url)}</span>
        </a>
        
        {/* <Button onClick={() => {
          if (userAddress) {
            setVerifyingModalOpen(true)
          } else {
            connect()
          }
        }} className='bg-swatch-400 hover:bg-swatch-500 text-white hover:text-white rounded-lg px-5 py-3 h-14 text-lg'>
          <span>Write review</span>
        </Button> */}
      </div>
    </section>
  )
}
