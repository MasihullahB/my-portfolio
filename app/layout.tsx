import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata: Metadata = {
  title: 'Home | Masihullah Budye',
  description:
    'Welcome to my portfolio site. I am a dynamic and dedicated Senior Developer with expertise in React, SharePoint, and the MERN stack.',
  openGraph: {
    title: 'Home | Masihullah Budye',
    description:
      'Welcome to my portfolio site. I am a dynamic and dedicated Senior Developer with expertise in React, SharePoint, and the MERN stack.',
    type: 'website',
    url: 'https://masihullahbudye.com',
    siteName: 'Masihullah Budye',
    locale: 'en_US',
  },
  twitter: {
    title: 'Home | Masihullah Budye',
    description:
      'Welcome to my portfolio site. I am a dynamic and dedicated Senior Developer with expertise in React, SharePoint, and the MERN stack.',
  },
  robots:
    'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Masihullah Budye',
    'Senior Developer',
    'React',
    'SharePoint',
    'MERN',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'HTML',
    'CSS',
    'Web Developer',
    'Portfolio',
    'Node.js',
    'mongodb',
    'projects',
    'contact',
  ],
  creator: 'Masihullah Budye',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} font-mont antialiased flex flex-col min-h-screen`}
      >
        <main className='flex-grow container mx-auto px-6 pb-6'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
