interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  tasks: string[];
}

interface TimelineProps {
  experiences: ExperienceProps[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => (
  <div className='space-y-4'>
    {experiences.map((exp, index) => (
      <div key={index} className='border-l-2 border-gray-300 pl-4'>
        <h2 className='text-xl font-bold'>
          {exp.role} at {exp.company}
        </h2>
        <p>{exp.duration}</p>
        <ul className='list-disc list-inside mt-2'>
          {exp.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Timeline;
