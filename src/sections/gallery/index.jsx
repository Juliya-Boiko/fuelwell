import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavBtn } from 'components/buttons/nav/NavBtn';
import 'swiper/css';
import "swiper/css/navigation";

const slides = [
  {
    id: 0,
    name: 'Scania G410',
    type: 'FW 6D |Vita-Auto| 3 pcs. |22 % & 19% & 13% |'
  },
  {
    id: 1,
    name: 'MAN TGA 18.430',
    type: 'FW 8D |OKKO| 21%|'
  },
  {
    id: 2,
    name: 'MAN 8180',
    type: '| FW 6D | EcoSoft | 9% |'
  },
  {
    id: 3,
    name: 'Scania G410',
    type: 'FW 6D |Vita-Auto| 3 pcs. |22 % & 19% & 13% |'
  },
  {
    id: 4,
    name: 'MAN TGA 18.430',
    type: 'FW 8D |OKKO| 21%|'
  },
  {
    id: 5,
    name: 'MAN 8180',
    type: '| FW 6D | EcoSoft | 9% |'
  },
];

export const Gallery = () => {
  const swiperRef = useRef();

  return (
    <section id='offers' className="section gallery">
      <div className='container'>
        <h2 className="section__title gallery__title"><span className="section__title--accent">FUEL</span> CONSUMPTION <span className="section__title--accent">EFFICIENCY</span> </h2>
        <div className='gallery__nav'>
          <NavBtn reversed onClick={() => swiperRef.current?.slidePrev()} />
          <NavBtn onClick={() => swiperRef.current?.slideNext()} />
        </div>
      </div>
      <Swiper
        spaceBetween={15}
        loop={true}
        slidesPerView={"auto"}
        modules={[Navigation]}
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
      >
        {slides.map(({ id, name, type }) => {
          return <SwiperSlide key={id} style={{ width: 'auto' }}>
            <div className='gallery__slide'>
              <picture>
                <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/gallery/tablet/slide1.webp')} 1x, ${require('../../assets/images/gallery/tablet/slide1@2x.webp')} 2x,`} type="image/webp" ></source>
                <source media="(min-width: 768px)" srcSet={`${require('../../assets/images/gallery/tablet/slide1.png')} 1x, ${require('../../assets/images/gallery/tablet/slide1@2x.png')} 2x,`}></source>
                <source srcSet={`${require('../../assets/images/gallery/mobile/slide1.webp')} 1x, ${require('../../assets/images/gallery/mobile/slide1@2x.webp')} 2x,`} type="image/webp" />
                <img src={require('../../assets/images/gallery/mobile/slide1.png')} srcSet={`${require('../../assets/images/gallery/mobile/slide1@2x.png')} 2x`}
                  alt={name} loading='lazy' className='gallery__img'
                />
              </picture>
              <div className='gallery__wrapper'>
                <p className='gallery__name'>{name}</p>
                <p>{type}</p>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    </section>
  );
};