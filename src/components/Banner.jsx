// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  return (
   <div className='h-screen'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" /></SwiperSlide>
     <SwiperSlide><img src="https://cdn.pixabay.com/photo/2019/10/23/20/40/landscape-4572804_1280.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://media.istockphoto.com/id/163814527/vector/child-and-ears.jpg?s=612x612&w=0&k=20&c=1L-3EPYawtTCq_L7yYtRDqgNDfqh4IQtASXXHDR3i8s=" /></SwiperSlide>
       <SwiperSlide><img src="https://media.istockphoto.com/id/480183542/photo/freedom.jpg?s=612x612&w=0&k=20&c=NdAGfWZTb9kaSCWlyza1rIBqqPc6xLAtxixpaxynsZk=" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner