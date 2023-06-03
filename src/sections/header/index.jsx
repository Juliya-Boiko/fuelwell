import { useState } from "react";
import { Logo } from "components/logo";
import { Nav } from "components/nav";
import { Menu } from "components/menu";
import { MenuBtn } from "components/buttons/menu/MenuBtn";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const preventScroll = (status) => {
    const root = document.getElementById('root');
    status ? root.classList.add('prevent-scroll') : root.classList.remove('prevent-scroll');
  };

  preventScroll(showMenu);

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <MenuBtn showMenu={showMenu} onClick={() => setShowMenu(prev => !prev)} />
        <Nav />
      </div>
      {showMenu ? <Menu onClick={() => setShowMenu(false)} /> : null}
    </header>
  );
};