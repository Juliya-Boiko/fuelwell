import { HeaderLink } from 'components/links/header';

export const Nav = () => {
  return (
    <nav className="nav">
      <HeaderLink anchor='about' />
      <HeaderLink anchor='benefits' />
      <HeaderLink anchor='calculate' />
      <HeaderLink anchor='quote' />
      <HeaderLink anchor='offers' />
      <HeaderLink anchor='contacts' />
    </nav>
  );
};