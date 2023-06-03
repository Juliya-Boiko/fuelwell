import { Link } from 'react-scroll';

export const Nav = () => {
  return (
    <nav className="nav">
      <Link className='nav__link' to="about" spy={true} smooth={true} duration={500}>About</Link>
      <Link className='nav__link' to="benefits" spy={true} smooth={true} duration={500}>Benefits</Link>
      <Link className='nav__link' to="calculate" spy={true} smooth={true} duration={500}>Calculate</Link>
      <Link className='nav__link' to="quote" spy={true} smooth={true} duration={500}>Quote</Link>
      <Link className='nav__link' to="offers" spy={true} smooth={true} duration={500}>Offers</Link>
      <Link className='nav__link' to="contacts" spy={true} smooth={true} duration={500}>Contacts</Link>
    </nav>
  );
};