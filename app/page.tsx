import React from 'react';
import Image from 'next/image';
export default function Home() {
  return (
    <React.Fragment>
      <section className='py-10'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-2/3 sm:w-96 sm:h-96 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4'>
            <Image
              src='/images/profile-pic-nobg-min.png'
              alt='Image of Masihullah Budye'
              // className='rounded-full mb-4'
              // objectFit='fill'
              width={512}
              height={512}
            />
          </div>
          <div className='w-2/3'>
            <h1 className='text-4xl font-bold text-center'>
              Hello, I&apos;m Masihullah Budye
            </h1>
            <p className='text-lg text-center mt-4'>
              A passionate Senior FullStack Developer with a solid foundation in
              modern web development technologies. I am dedicated to turning
              ideas into innovative web applications. Get to know me, explore my
              latest projects and articles showcasing my expertise in React.js,
              Node.js and SharePoint.
            </p>
          </div>
        </div>
      </section>

      <section className='py-10'>
        <h2 className='text-2xl font-bold text-center'>Skills</h2>
        <ul className='mt-6 space-y-4'>
          <li className='list-disc'>Javascript, HTML, CSS</li>
          <li className='list-disc'>React, Redux, React Router</li>
          <li className='list-disc'>Node.js, Express.js, MongoDB</li>
          <li className='list-disc'>Bootstrap, Tailwind CSS</li>
          <li className='list-disc'>SharePoint Server and Client-side APIs</li>
          <li className='list-disc'>
            SharePoint Framework Webparts and Extensions
          </li>
          <li className='list-disc'>
            Power Platform (PowerApp and Power Automate)
          </li>
          {/* Continue the list for all your skills */}
        </ul>
      </section>
    </React.Fragment>
  );
}
