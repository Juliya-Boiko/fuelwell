import { Link } from 'react-scroll';

export const Menu = ({ onClick }) => {
  return (
    <div id="menu" className="menu">
      <nav className='menu__nav'>
        <Link className='menu__link' offset={-114} onClick={onClick} to="about" spy={true} smooth={true} duration={500}>About</Link>
        <Link className='menu__link' offset={-114} onClick={onClick} to="benefits" spy={true} smooth={true} duration={500}>Benefits</Link>
        <Link className='menu__link' offset={-114} onClick={onClick} to="calculate" spy={true} smooth={true} duration={500}>Calculate</Link>
        <Link className='menu__link' offset={-114} onClick={onClick} to="quote" spy={true} smooth={true} duration={500}>Quote</Link>
        <Link className='menu__link' offset={-114} onClick={onClick} to="offers" spy={true} smooth={true} duration={500}>Offers</Link>
        <Link className='menu__link' offset={-114} onClick={onClick} to="contacts" spy={true} smooth={true} duration={500}>Contacts</Link>
      </nav>
    </div>
  );
};