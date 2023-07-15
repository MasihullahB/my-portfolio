'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <header className='bg-gray-800 text-white px-6 py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link
            href='/'
            className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-300 text-white hover:text-gray-800 text-2xl font-bold transition-colors duration-300'
          >
            MB
          </Link>
          <nav className='hidden md:block'>
            <ul className='flex space-x-4'>
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='hover:text-blue-400'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              // svg for hamburger button
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                {' '}
                <g>
                  {' '}
                  <path fill='none' d='M0 0h24v24H0z' />{' '}
                  <path
                    fill='currentColor'
                    d='M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z'
                  />{' '}
                </g>{' '}
              </svg>
            ) : (
              // svg for close button
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                {' '}
                <g>
                  {' '}
                  <path fill='none' d='M0 0h24v24H0z' />{' '}
                  <path
                    fill='currentColor'
                    d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z'
                  />{' '}
                </g>{' '}
              </svg>
            )}
          </div>
        </div>
      </header>
      {/* mobile menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-gray-800 text-white transform ${
          open ? '-translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='flex items-center justify-center h-20'>
          {/*logo container*/}
          <Link
            href='/'
            className='flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-300 text-white hover:text-gray-800 text-2xl font-bold transition-colors duration-300'
          >
            MB
          </Link>
        </div>
        <div className='flex flex-col ml-4'>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-xl font-medium my-4'
              onClick={() => setTimeout(() => setOpen(!open), 100)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
