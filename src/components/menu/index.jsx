import { Link } from 'react-scroll';

export const Menu = ({ onClick }) => {
  return (
    <div className="menu">
      <nav className='menu__nav'>
        <Link className='menu__link' onClick={onClick} to="about" spy={true} smooth={true} duration={500}>About</Link>
        <Link className='menu__link' onClick={onClick} to="benefits" spy={true} smooth={true} duration={500}>Benefits</Link>
        <Link className='menu__link' onClick={onClick} to="calculate" spy={true} smooth={true} duration={500}>Calculate</Link>
        <Link className='menu__link' onClick={onClick} to="quote" spy={true} smooth={true} duration={500}>Quote</Link>
        <Link className='menu__link' onClick={onClick} to="offers" spy={true} smooth={true} duration={500}>Offers</Link>
        <Link className='menu__link' onClick={onClick} to="contacts" spy={true} smooth={true} duration={500}>Contacts</Link>
      </nav>
    </div>
  );
};