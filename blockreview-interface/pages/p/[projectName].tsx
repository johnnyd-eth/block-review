import { useRouter } from 'next/router';
import { ProjectPage } from '../../components/pages/ProjectPage/ProjectPage';
import { PROJECT_DATA } from '../../projectData';

export default function Project() {
  const router = useRouter();
  const { projectName } = router.query;

  // Look up the project data using the projectName from the URL.
  const project = PROJECT_DATA[projectName as string];

  // It's a good idea to handle the case where the projectName is not found.
  if (!project) {
    return <div className='h-[80vh] flex items-center justify-center'><span>404: Project{' '}<strong>{projectName}</strong>{' '} not found</span></div>;
  }

  return <ProjectPage project={project} />;
}
