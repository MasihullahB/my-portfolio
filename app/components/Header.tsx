import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='bg-gray-800 text-white px-6 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-2xl font-bold'>
          MB
        </Link>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/about' className='hover:text-blue-400'>
                About
              </Link>
            </li>
            <li>
              <Link href='/experience' className='hover:text-blue-400'>
                Experience
              </Link>
            </li>
            <li>
              <Link href='/portfolio' className='hover:text-blue-400'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href='/blog' className='hover:text-blue-400'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:text-blue-400'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
