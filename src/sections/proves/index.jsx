import { BorderedBtn } from "components/buttons/bordered/BorderedBtn";

export const Proves = () => {
  return (
    <section className="section proves">
      <div className="container">
        <h2 className="section__title proves__title"><span className="section__title--accent">aDDITIONAL</span>PROVES</h2>
        <ul className="proves__list">
          <li className="proves__item">
            <p className="proves__index">01</p>
            <p className="proves__text"> technical brief  and more traction</p>
            <div className="proves__btn"><BorderedBtn title="View pdf" /></div>
          </li>
          <li className="proves__item">
            <p className="proves__index">02</p>
            <p className="proves__text">Agroelectronics John Deer  (Fuel)</p>
            <div className="proves__btn"><BorderedBtn title="View pdf" /></div>
          </li>
          <li className="proves__item">
            <p className="proves__index">03</p>
            <p className="proves__text">(Fuel) Kernel</p>
            <div className="proves__btn"><BorderedBtn title="View pdf" /></div>
          </li>
        </ul>
      </div>
    </section>
  );
};