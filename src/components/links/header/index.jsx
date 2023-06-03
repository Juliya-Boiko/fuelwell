import { Link } from 'react-scroll';

export const HeaderLink = ({ anchor }) => {

  return (
    <Link
      className='header-link'
      offset={-74}
      to={anchor}
      spy={true}
      smooth={true}
      duration={500}>
      {anchor}
    </Link>
  );
};