'use client';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SocialIcon from '../components/SocialIcon';

const Page: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const socials = [
    {
      Icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/masihullah-budye',
    },
    {
      Icon: FaGithub,
      link: 'https://github.com/masihullahb',
    },
    {
      Icon: FaTwitter,
      link: 'https://twitter.com/masihullahbudye',
    },
    {
      Icon: FaEnvelope,
      link: 'mailto:masihullah.ib@gmail.com',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:masihullah.ib@gmail.com?subject=Contact from ${name} ${email}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className='py-10'>
      <h1 className='text-4xl font-bold text-center'>Contact</h1>
      <p className='mt-4'>
        I&apos;m looking forward to hearing from you! If you&apos;d like to get
        in touch, please use the form below.
      </p>
      <form className='mt-6' onSubmit={handleFormSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='w-full p-2 border rounded'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 border rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block mb-2'>
            Message
          </label>
          <textarea
            id='message'
            className='w-full p-2 border rounded'
            rows='4'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded'
        >
          Submit
        </button>
      </form>
      <div className='mt-8 flex justify-center space-x-4'>
        {socials.map((social, index) => (
          <SocialIcon
            key={index}
            Icon={social.Icon}
            link={social.link}
            size={32}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
