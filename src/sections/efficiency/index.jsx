import { Donut } from 'components/donut';

const data = [
  {
    id: 0,
    value: 90,
    label: 'pm',
    descr: 'Highly dispersed particles such as soot - harmful soot.'
  },
  {
    id: 1,
    value: 39,
    label: 'co',
    descr: 'Poisonous, odourless, tasteless and colourless'
  },
  {
    id: 2,
    value: 35,
    label: 'no',
    descr: 'Poisonous gas is harmful for people'
  },
  {
    id: 3,
    value: 15,
    label: 'co2',
    descr: 'Causes global warming'
  },
];

export const Efficiency = () => {
  return (
    <section className="section efficiency">
      <div className="container efficiency__container">
        <h2 className="section__title efficiency__title">BRING YOUR CORPORATE FLEET TO THE NEXT LEVEL OF EFFICIENCY</h2>
        <p className='efficiency__text'>At least <span className="efficiency__text--accent">10% less</span> fuel consumption. Harmful emissions reduce as following</p>
        <picture>
          <source media="(min-width: 1920px)" srcSet={`${require('../../assets/images/efficiency/desktop/efficiency.webp')} 1x, ${require('../../assets/images/efficiency/desktop/efficiency@2x.webp')} 2x,`} type="image/webp" ></source>
          <source media="(min-width: 1920px)" srcSet={`${require('../../assets/images/efficiency/desktop/efficiency.png')} 1x, ${require('../../assets/images/efficiency/desktop/efficiency@2x.png')} 2x,`}></source>
          
          <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/efficiency/tablet/efficiency.webp')} 1x, ${require('../../assets/images/efficiency/tablet/efficiency@2x.webp')} 2x,`} type="image/webp" ></source>
          <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/efficiency/tablet/efficiency.png')} 1x, ${require('../../assets/images/efficiency/tablet/efficiency@2x.png')} 2x,`}></source>
          
          <source srcSet={`${require('../../assets/images/efficiency/mobile/efficiency.webp')} 1x, ${require('../../assets/images/efficiency/mobile/efficiency@2x.webp')} 2x,`} type="image/webp" />
          <img src={require('../../assets/images/efficiency/mobile/efficiency.png')} srcSet={`${require('../../assets/images/efficiency/mobile/efficiency@2x.png')} 2x`}
            alt="FuelWell" loading='lazy' className='efficiency__img'
          />
        </picture>
        
        <ul className='efficiency__list'>
          {data.map(({ id, value, label, descr }) => {
            return <li key={id} className='efficiency__item'>
              <Donut value={value} label={label} />
              <p className='efficiency__descr'>{descr}</p>
            </li>
          })}
        </ul>

      </div>
    </section>
  );
};