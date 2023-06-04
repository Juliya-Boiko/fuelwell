import { Fade } from "react-awesome-reveal";

export const Device = () => {
  return (
    <section className="section device">
      <div className="container">
        <Fade>
          <h2 className="section__title device__title"><span className="section__title--accent">FUELWELL</span> DEVICE ADITIONAL BENEFITS FOR DIESEL ENGINE</h2>
        </Fade>
        <Fade cascade>
          <p className="device__descr">FuelWell device reduces PM emission on 90%. Most PM is soot, which is unburned diesel fuel. As a result, less soot comes into an exhaust system lifetime of the stock EGR soot filter increase. </p>
          <p className="device__descr">Moreover, 35% less NOx emission decreases AdBlue urea liquid consumption.</p>
        </Fade>
        <div className='device__wrapper'>
          <picture>
            <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/device/tablet/device.webp')} 1x, ${require('../../assets/images/device/tablet/device@2x.webp')} 2x,`} type="image/webp" ></source>
            <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/device/tablet/device.png')} 1x, ${require('../../assets/images/device/tablet/device@2x.png')} 2x,`}></source>
            
            <source srcSet={`${require('../../assets/images/device/mobile/device.webp')} 1x, ${require('../../assets/images/device/mobile/device@2x.webp')} 2x,`} type="image/webp" />
            <img src={require('../../assets/images/device/mobile/device.png')} srcSet={`${require('../../assets/images/device/mobile/device@2x.png')} 2x`}
              alt="FuelWell Device" loading='lazy' className='device__img'
            />
          </picture>
          <Fade>
            <ul className='device__list'>
              <li className='device__item'>
                <p className='device__index'>01</p>
                <p>Helps reduce operating fuel costs</p>
              </li>
              <li className='device__item'>
                <p className='device__index'>02</p>
                <p>Helps achieve carbon neutrality goals more effectively</p>
              </li>
              <li className='device__item'>
                <p className='device__index'>03</p>
                <p>Innovative technology</p>
              </li>
              <li className='device__item'>
                <p className='device__index'>04</p>
                <p>Be among the first to save your costs by caring for the environment</p>
              </li>
              <li className='device__item'>
                <p className='device__index'>05</p>
                <p>It's profitable to be in the eco trend</p>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
};
