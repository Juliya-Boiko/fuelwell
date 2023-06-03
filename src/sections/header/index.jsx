import { useState, useEffect, useRef } from "react";
import { Logo } from "components/logo";
import { Nav } from "components/nav";
import { Menu } from "components/menu";
import { MenuBtn } from "components/buttons/menu/MenuBtn";

export const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const headerRef = useRef(null);

  const preventScroll = (status) => {
    const root = document.getElementById('root');
    status ? root.classList.add('prevent-scroll') : root.classList.remove('prevent-scroll');
  };

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const scrollEventHandler = () => {
      handleScroll(header.top, header.height)
    }
    window.addEventListener('scroll', scrollEventHandler);
    return () => {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, []);

  preventScroll(showMenu);

  return (
    <header ref={headerRef} className={`header ${sticky.isSticky ? 'header--sticky' : ''}`}>
      <div className="container header__container">
        <Logo />
        <MenuBtn showMenu={showMenu} onClick={() => setShowMenu(prev => !prev)} />
        <Nav />
      </div>
      {showMenu ? <Menu onClick={() => setShowMenu(false)} /> : null}
    </header>
  );
};