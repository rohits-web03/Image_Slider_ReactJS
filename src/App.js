import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {register} from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image_1 from "./images/image_1.jpg";
import image_2 from "./images/image_2.jpg";
import image_3 from "./images/image_3.jpeg";
import image_4 from "./images/image_4.jpeg";
import image_5 from "./images/image_5.jpg";
import image_6 from "./images/image_6.jpeg";
import image_7 from "./images/image_7.jpg";
import image_8 from "./images/image_8.jpeg";
import image_9 from "./images/image_9.jpeg";


import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';

register();


function App() {
  return (
    <div className="Container">
      <h1 className='heading'>3D Image Slider</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide><img src={image_1} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_2} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_3} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_4} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_5} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_6} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_7} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_8} alt='slide image'></img></SwiperSlide>
        <SwiperSlide><img src={image_9} alt='slide image'></img></SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
