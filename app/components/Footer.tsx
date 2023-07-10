import SocialIcon from './SocialIcon';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
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

  return (
    <footer className='bg-gray-800 text-white px-6 py-4'>
      <div className='flex justify-center items-center'>
        <p>&copy; {new Date().getFullYear()} Masihullah Budye</p>
        <div className='flex justify-center space-x-4 px-4'>
          {socials.map((social, index) => (
            <SocialIcon
              key={index}
              Icon={social.Icon}
              link={social.link}
              size={20}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
