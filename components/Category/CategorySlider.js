import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from "next/link";
import { Navigation, Pagination,Autoplay } from "swiper";
 const CategorySlider = () => {
  return (
    <div>
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
           <img src='/image/category/banner1.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/slider2">
           <a>
           <img src='/image/category/banner2.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/slider3">
           <a>
           <img src='/image/category/banner3.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
        <SwiperSlide>
         <Link href="/slider4">
           <a>
           <img src='/image/category/banner4.jpg' /> 
           </a>
         
         </Link>
        </SwiperSlide>
         
      </Swiper>
    </div>
  )
}
export default CategorySlider
 
 