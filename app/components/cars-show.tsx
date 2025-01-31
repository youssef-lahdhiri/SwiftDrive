"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useRef } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import cars from "../data/carShow.json";
import useStore from "../store/store";

export default function CarSwiper() {
    const setCar = useStore((state) => state.setCar);
    const ref=useRef(null)
    // if(ref.current){
    //     ref.current.activSlide;
    // const handelChange=(slider: SwiperType)=>{
    const handelChange=(swiper:any)=>{
        console.log(swiper.realIndex)
        setCar(cars[swiper.realIndex])
    }
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Swiper
      onSlideChange={(swiper)=>handelChange(swiper)}
      ref={ref}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
            scale:0.75,
          rotate: 0,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        
        modules={[EffectCoverflow]}
        className="w-full  ">
        {cars.map((car,idx) => (
          <SwiperSlide key={idx} className="w-full ">
            
            <img
              src={car.imgUrl}
              alt="Car"
              className="w-full   mx-auto rounded-lg "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
