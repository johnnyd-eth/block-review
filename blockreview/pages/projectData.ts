import { Project } from "@/models/project";
import { blockReviewContractAddress } from "./blockReviewContract";

export const PROJECT_DATA: Record<string, Project> = {
  juicebox: {
    id: 1,
    name: 'Juicebox',
    description: 'The programmable crypto fundraising protocol for builders and creators. Light enough for a group of friends, powerful enough for a global network of anons. Community-owned, on Ethereum.',
    logo: '/assets/juicebox-logo.png',
  },
  polygon: {
    id: 2,
    name: 'Polygon',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/juicebox-logo.png'
  },
  blockReview: {
    id: 3,
    name: 'Blockreview',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/juicebox-logo.png',
    contractAddress: blockReviewContractAddress
  }
}
