import { ReactComponent as BurgerIcon } from '../../../assets/svg/burger.svg';

export const MenuBtn = ({ showMenu, onClick }) => {
  return (
    <button className="menu-btn">
      <BurgerIcon className={showMenu ? 'menu-btn__icon active' : 'menu-btn__icon'} onClick={onClick} />
    </button>
  );
};

// {/* <button aria-expanded="false" aria-controls="menu">Раскрыть меню</button>
//  <div class="menu" id="menu">
//    <ul>
//      <li>
//        <a href="/dogs-pools/">Бассейны для собак</a>
//      </li>
//      <li>
//        <a href="/cats-boxes/">Коробки для кошек</a>
//      </li>
//    </ul>
//  </div>

// Aria-expanded принимает одно из трёх значений:
//  true — содержимое или другие элементы развёрнуты.
//  false — содержимое или другие элементы свёрнуты.
//  undefined (по умолчанию) — у элемента нет содержимого, которое разворачивается и сворачивается. */}