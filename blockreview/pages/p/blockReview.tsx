import { ProjectPage } from "../../components/ProjectPage/ProjectPage"
import { PROJECT_DATA } from "../../projectData"

export default function BlockReview() {
  const project = PROJECT_DATA.blockReview
  return <ProjectPage project={project} />
}
