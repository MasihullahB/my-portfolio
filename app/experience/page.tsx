import Timeline from '../components/Timeline';

const experiences = [
  {
    role: 'Senior M365 Consultant',
    company: 'Cielo Costa',
    duration: 'April 2022 - June 2022',
    tasks: [
      'Orchestrated the successful implementation of an incident reporting form by leveraging MS Form and Power Automate to seamlessly push data into SharePoint.',
      'Oversaw change requests and provided technical guidance to ensure the smooth operation of existing PowerApps.',
      'Conducted requirement gathering sessions with clients to determine their needs and collaborated with team members to create accurate development estimates.',
      'Designed and updated technical solution documents with implementation details, ensuring efficient delivery and effective project management.',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'State Trading Organization Plc.',
    duration: 'April 2019 - March 2022',
    tasks: [
      "Developed client-side applications using modern JavaScript, HTML, CSS, and SharePoint's JavaScript API to automate paper-based processes for multiple departments.",
      'Implemented single-page applications modern JavaScript practices to build web apps that use a modular coding approach.',
      'Created a common API module for List/Library CRUD operations, enabling applications to share parameters and reducing code redundancy.',
      'Leveraged Microsoft PowerApps and Power Automate to build two mobile approval apps for company executives, streamlining the approval process. Built custom schedulers using C# and Power Automate.',
      'Proactively collaborated with various departments to gather requirements and design customized solutions to improve efficiency and productivity.',
      'Served as a SharePoint Subject Matter Expert and primary point of contact for upper management and company staff, ensuring all projects and deliverables exceeded expectations.',
      'Continuously explored best practices in JavaScript to implement optimal code architecture.',
    ],
  },
  {
    role: 'Senior Consultant / Consultant',
    company: 'Bristlecone Inc.',
    duration: 'January 2016 - March 2019',
    tasks: [
      'Developed SharePoint solutions, including Web Parts and Application Pages, while creating SSRS reports for transactional systems.',
      'Facilitated SharePoint farm deployments and expertly migrated from SharePoint 2010 to SharePoint Online using Sharegate.',
      'Demonstrated strong technical skills in integration with other platforms and technologies via web services, SOAP, and Web API.',
    ],
  },
];

const Page = () => (
  <div className='container mx-auto p-4'>
    <h1 className='text-2xl font-bold mb-4'>Experience</h1>
    <Timeline experiences={experiences} />
  </div>
);

export default Page;
