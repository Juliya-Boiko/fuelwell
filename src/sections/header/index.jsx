import { useState } from "react";
import { Logo } from "components/logo";
import { MenuBtn } from "components/buttons/menu/MenuBtn";
import { Nav } from "components/nav";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <MenuBtn showMenu={showMenu} onClick={() => setShowMenu(prev => !prev)} />
        <Nav />
      </div>
    </header>
  );
};