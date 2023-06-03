import { ReactComponent as Cycle } from '../../assets/svg/cycle.svg';
import { ReactComponent as Engine } from '../../assets/svg/engine.svg';
import { ReactComponent as Star } from '../../assets/svg/star.svg';
import { ReactComponent as Like } from '../../assets/svg/like.svg';
import { ReactComponent as Safe } from '../../assets/svg/safe.svg';
import { ReactComponent as Roi } from '../../assets/svg/roi.svg';
import { ReactComponent as Recycle } from '../../assets/svg/recycle.svg';
import { ReactComponent as Co } from '../../assets/svg/co.svg';

export const Benefits = () => {
  return (
    <section id='benefits' className="section benefits">
      <div className="container">
        <ul className='benefits__list'>
          <li className='benefits__item'>
            <h2 className="section__title">ADDITIONAL <span className="section__title--accent">BENEFITS</span></h2>
          </li>
          <li className='benefits__item'>
            <Engine className='benefits__icon'/>
            <p>available for diesel and gasoline engines EURO 6, EURO 5, and lover</p>
          </li>
          <li className='benefits__item'>
            <Cycle className='benefits__icon'/>
            <p>no service during life-cycle</p>
          </li>
          <li className='benefits__item'>
            <Star className='benefits__icon'/>
            <p>installation with no screw full kit included</p>
          </li>
          <li className='benefits__item'>
            <Roi className='benefits__icon'/>
            <p>Fast ROI (return of investments)</p>
          </li>
          <li className='benefits__item'>
            <Like className='benefits__icon'/>
            <p>Compact size</p>
          </li>
          <li className='benefits__item'>
            <Recycle className='benefits__icon'/>
            <p>Recyclable in full</p>
          </li>
          <li className='benefits__item'>
            <Safe className='benefits__icon'/>
            <p>сompletely human and vehicle safe, no connection to power supply, standard place to mount</p>
          </li>
          <li className='benefits__item'>
            <Co className='benefits__icon'/>
            <p>Industry's most cost-efficient technology reduction USD/1 kg of CO2</p>
          </li>
        </ul>
      </div>
    </section>
  );
};