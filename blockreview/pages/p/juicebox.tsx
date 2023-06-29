import { ProjectPage } from "../../components/ProjectPage/ProjectPage"
import { PROJECT_DATA } from "../../projectData"

export default function Juicebox() {
  const project = PROJECT_DATA.juicebox
  return <ProjectPage project={project} />
}
