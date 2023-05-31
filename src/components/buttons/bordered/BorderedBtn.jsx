import { ReactComponent as Arrow } from '../../../assets/svg/arrow-link.svg';

export const BorderedBtn = ({ type = 'button', title, onClick }) => { 
  return (
    <button type={type} onClick={onClick} className='bordered-btn'>
      {title}
      <Arrow className='bordered-btn__icon' />
    </button>
  );
};