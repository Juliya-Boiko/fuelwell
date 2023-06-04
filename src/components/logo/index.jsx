import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

export const Logo = () => {
  const scroll  = Scroll.animateScroll;
  return (
    <Link onClick={() => scroll.scrollToTop()} className='logo'>
      <picture>
        <source srcSet={`${require('../../assets/images/logo/logo.webp')} 1x, ${require('../../assets/images/logo/logo@2x.webp')} 2x,`} type="image/webp" />
        <img src={require('../../assets/images/logo/logo.png')} srcSet={`${require('../../assets/images/logo/logo@2x.png')} 2x`}
          alt="WellFuel" loading='lazy' width='74px' height='43px'
        />
      </picture>
    </Link>
  );
};