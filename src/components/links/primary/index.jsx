import { ReactComponent as Arrow } from '../../../assets/svg/arrow-link.svg';

export const PrimaryLink = ({ path, title }) => {
  return (
    <a href={path} className="primary-link">
      {title}
      <Arrow className='primary-link__icon' />
    </a>
  );
};