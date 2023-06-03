import { Link } from 'react-scroll';
import { ReactComponent as Arrow } from '../../../assets/svg/arrow-link.svg';

export const PrimaryLink = ({ path, title }) => {
  return (
    <Link className='primary-link' to={path} spy={true} smooth={true} duration={500}>
      {title}
      <Arrow className='primary-link__icon' />
    </Link>
  );
};