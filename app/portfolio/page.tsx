import ProjectCard from '../components/ProjectCard';

const Page: React.FC = () => (
  <div className='container mx-auto p-4'>
    <h1 className='text-2xl font-bold mb-4'>My Projects</h1>
    <div className='transform transition duration-500 hover:scale-105'>
      <ProjectCard
        title='React SharePoint Applications'
        description='Description about this project...'
        techStack={['React', 'SharePoint Framework']}
        link='Link to the project'
        codeLink='Link to the GitHub code'
      />
    </div>
    <div className='transform transition duration-500 hover:scale-105'>
      <ProjectCard
        title='React Frontend and MERN FullStack Applications'
        description='Completed a number of personal projects to improve my skills in React frontend and MERN FullStack development.'
        techStack={['MongoDB', 'Express.js', 'React.js', 'Node.js']}
        link='[Link to the hosted applications]'
        codeLink='[Link to your GitHub repository]'
      />
    </div>
  </div>
);

export default Page;
