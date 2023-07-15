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
  <div className='rounded bg-gray-800 shadow-lg p-4 my-4 hover:shadow-xl transition duration-300'>
    <h2 className='text-xl font-bold'>{title}</h2>
    <p className='mt-2'>{description}</p>
    <p className='mt-2'>Tech Stack: {techStack.join(', ')}</p>
    <div className='mt-4'>
      <a href={link} className='mr-4 hover:text-blue-500'>
        View Project
      </a>
      <a href={codeLink} className='hover:text-blue-500'>
        View Code
      </a>
    </div>
  </div>
);

export default ProjectCard;
