export interface Review {
  id?: number
  reviewer: string // address
  rating: number // out of 5
  comment: string
  verified: boolean
  timestamp?: Date
  link?: string
}
