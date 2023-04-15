import { ProjectPage } from "../../components/ProjectPage"
import { PROJECT_DATA } from "../../projectData"

export default function Polygon() {
  const project = PROJECT_DATA.polygon
  return <ProjectPage project={project} />
}
