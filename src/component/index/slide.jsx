import slideImg from '../../images/slide/volunteer-helping-with-donation-box.jpg'
import slideImg1 from '../../images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg'
import slideImg2 from '../../images/slide/medium-shot-people-collecting-donations.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={slideImg} className='slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg1} className='slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg2} className='slide-img' alt="" />
      </SwiperSlide>
    </Swiper>
  );
};