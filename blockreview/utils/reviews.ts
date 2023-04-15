import { Review } from "@/models/review";

export function processReviews(reviewers: string[], ratings: number[], comments: string[]): Review[] {
  const reviews = []

  for (let i = 0; i < reviewers.length; i++) {
    const review = {
      reviewer: reviewers[i],
      rating: ratings[i],
      comment: comments[i]
    };
    reviews.push(review)
  }

  return reviews
}

export function getAverageRating(reviews: Review[]): number {
  return reviews.reduce((total, next) => total + Number(next.rating), 0) / reviews.length
}
