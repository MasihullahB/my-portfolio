import React from 'react';
export default function Home() {
  return (
    <React.Fragment>
      <section className='py-10'>
        <h1 className='text-4xl font-bold text-center'>
          Hello, I&apos;m Masihullah Budye
        </h1>
        <p className='text-lg text-center mt-4'>
          A passionate Senior Developer with a solid foundation in modern web
          development technologies.
        </p>
      </section>

      <section className='py-10'>
        <h2 className='text-2xl font-bold text-center'>Skills</h2>
        <ul className='mt-6 space-y-4'>
          <li>Javascript, HTML, CSS</li>
          <li>React, Redux, React Router</li>
          <li>Node.js, Express.js, MongoDB</li>
          <li>Bootstrap, Tailwind CSS</li>
          <li>SharePoint Server and Client-side APIs</li>
          {/* Continue the list for all your skills */}
        </ul>
      </section>
    </React.Fragment>
  );
}
