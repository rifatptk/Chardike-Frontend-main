import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from "next/link";
import { Navigation, Pagination,Autoplay } from "swiper";
import Styles from './Slider.module.css'
const LeftSlider = () => {
  return (
    <div className={Styles.sliderLeft}>
       <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       pagination={{
          clickable: true,
        }} navigation={true} modules={[Autoplay, Pagination,Navigation]} className="mySwiper">
        <SwiperSlide>
         <Link href="/slider1">
           <a>
           <img src='/image/slider/1.png' /> 
           </a>
         
         </Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/slider2">
           <a>
           <img src='/image/slider/2.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/slider3">
           <a>
           <img src='/image/slider/3.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
         
      </Swiper>
    </div>
  )
}
export default LeftSlider
 
 