import { ReactComponent as Arrow } from '../../../assets/svg/arrow-nav.svg';

export const NavBtn = ({ reversed, onClick }) => { 
  return (
    <button type='button' onClick={onClick} className={`nav-btn ${reversed ? 'nav-btn--reversed' : ''}`}>
      <Arrow className='nav-btn__icon' />
    </button>
  );
};