import { Project } from "@/models/project";
import { blockReviewContractAddress } from "./constants/blockReviewContract";

export const PROJECT_DATA: Record<string, Project> = {
  juicebox: {
    id: 1,
    name: 'Juicebox',
    description: 'The programmable crypto fundraising protocol for builders and creators. Light enough for a group of friends, powerful enough for a global network of anons. Community-owned, on Ethereum.',
    logo: '/assets/juicebox-logo.png',
    url: 'https://juicebox.money',
    contractAddress: '0xd4F10C2A2b0a997E42D9f7c56D0b1df1fF4504FF'
  },
  blockReview: {
    id: 2,
    name: 'Blockreview',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/blockreview-logo-small.png',
    contractAddress: blockReviewContractAddress
  },
  polygon: {
    id: 3,
    name: 'Polygon',
    description: "Polygon is the most proven way to build and scale your projects on Ethereum, the world's largest blockchain ecosystem.",
    logo: '/assets/juicebox-logo.png',
    contractAddress: '0xd4F10C2A2b0a997E42D9f7c56D0b1df1fF4504FF'
  },
  
}
