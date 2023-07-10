import Link from 'next/link';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/cjs';

interface SocialIconProps {
  Icon: IconType;
  link: string;
  size: IconBaseProps['size'];
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, link, size }) => (
  <Link href={link} target='_blank' rel='noopener noreferrer'>
    <Icon size={size} />
  </Link>
);

export default SocialIcon;
