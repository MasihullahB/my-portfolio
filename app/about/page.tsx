import React from 'react';

const Page: React.FC = () => {
  return (
    <React.Fragment>
      <section className='py-10'>
        <h1 className='text-4xl font-bold text-center'>About Me</h1>
        <p className='text-lg mt-4'>
          I am a dynamic and dedicated Senior Developer with a solid foundation
          in modern web development technologies including React, SharePoint,
          and the MERN stack. After a purposeful career break, I am now bringing
          fresh insights and updated techniques to Frontend or FullStack roles.
          I also boast a robust background in SharePoint development, having
          leveraged JavaScript, HTML, CSS, SharePoint, and Power Platform
          (PowerApp and Power Automate) to create impactful solutions. I believe
          I can be an asset to organizations seeking versatile developers
          capable of adapting to the needs of the project and continuously
          evolving with the industry.
        </p>
      </section>
      <section className='py-10'>
        <h1 className='text-4xl font-bold text-center'>Education</h1>
        <div className='mt-4 space-y-6'>
          <div>
            <h2 className='text-2xl font-semibold'>
              Gogate Jogalekar College, Mumbai University
            </h2>
            <p className='mt-2'>
              Bachelor of Science (Computer Science), 2007 - 2010
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>
              MET’s Institute of Computer Science, Mumbai University
            </h2>
            <p className='mt-2'>Master of Computer Applications, 2010-2013</p>
            <p className='italic'>Note: Did not finish this degree</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Page;
