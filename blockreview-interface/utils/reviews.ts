import { Review } from "@/models/review";

export function getTransactionLink(hash: string) {
  const basePolygonScanUrl = 'https://polygonscan.com/tx';
  return `${basePolygonScanUrl}/${hash}`;
}

export function processReviews(
  reviewers: string[], 
  ratings: number[], 
  comments: string[], 
  verifiedStatuses: boolean[], 
  timestamps: number[], 
  links: string[]
): Review[] {
  const reviews: Review[] = []
  for(let i = 0; i < reviewers.length; i++) {
    reviews.push({
      reviewer: reviewers[i],
      rating: ratings[i],
      comment: comments[i],
      verified: verifiedStatuses[i],
      timestamp: new Date(timestamps[i] * 1000),
      link: links[i]
    })
  }
  return reviews
}

export function getAverageRating(reviews: Review[]): number {
  return reviews.reduce((total, next) => total + Number(next.rating), 0) / reviews.length
}
