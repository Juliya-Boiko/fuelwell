import { ReactComponent as BurgerIcon } from '../../../assets/svg/burger.svg';

export const MenuBtn = ({ showMenu, onClick }) => {
  return (
    <button className="menu-btn" title='Open menu' aria-controls="menu">
      <BurgerIcon className={showMenu ? 'menu-btn__icon active' : 'menu-btn__icon'} onClick={onClick} />
    </button>
  );
};