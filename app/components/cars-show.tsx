"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Loader from "./loader";
import { useEffect, useRef } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import cars from "../data/carShow.json";
import useStore from "../store/store";
import CarOptions from "./car-options";
import { useState } from "react";
export default function CarSwiper() {
  const duration=useStore((state)=>state.duration)
  const [loading,setLoading]=useState(false)
  const place=useStore((state)=>state.place)
    const setCar = useStore((state) => state.setCar);
    const car=useStore((state)=>state.car)
    const ref=useRef(null)
    const handelChange=(swiper:any)=>{
        console.log(swiper.realIndex)
        setCar(cars[swiper.realIndex])
    }
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
    },[place])
  return (
 
    <div
    style={{backgroundImage:"url(/assets/select-bg.png"}}
    className=" carSwiper  flex-col gap-20  h-[100vh] mt-20 w-full flex justify-center items-center">
        <p className="text-6xl  text-center font-bold">PICK YOUR DREAM  <br />CAR TODAY</p>
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
        className="w-full    ">
        {cars.map((ca,idx) => (
          <SwiperSlide key={idx} className="w-full"> 
            {car==ca&&<div className="w-full text-center text-3xl font-bold">{car.name}</div>}
            <img
              src={ca.imgUrl}
              alt="Car"
              className="w-full    mx-auto rounded-lg "
            />
           {car==ca&&<CarOptions />}

          </SwiperSlide>
        ))}
      </Swiper>
       {/* } */}
    </div>
  );
}
