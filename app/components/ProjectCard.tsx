interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
  codeLink,
}) => (
  <div className='rounded border-2 border-gray-300 p-4 my-4'>
    <h2 className='text-xl font-bold'>{title}</h2>
    <p className='mt-2'>{description}</p>
    <p className='mt-2'>Tech Stack: {techStack.join(', ')}</p>
    <div className='mt-4'>
      <a href={link} className='mr-4'>
        View Project
      </a>
      <a href={codeLink}>View Code</a>
    </div>
  </div>
);

export default ProjectCard;
