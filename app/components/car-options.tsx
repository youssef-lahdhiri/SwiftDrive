"use client"
import { SiSpeedtest } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCar } from "react-icons/fa";


import useStore from "../store/store";
const CarOptions = () => {
    const car = useStore((state) => state.car);
    return ( 

<div className=" mx-auto items-center align-center grid grid-cols-3 justify-center bottom-[-10px] gap-4 bg-transparent w-1/2">

<div className="flex items-center justify-center flex-col"><div className="size-8 text-md md:size-14 md:text-3xl bg-white rounded-full flex justify-center items-center"><SiSpeedtest/></div> <p className="text-xs md:text-2xl text-center  ">{car.details.speed}km/h</p></div>
<div className="flex items-center justify-center flex-col"><div className="size-8 text-md md:size-14 md:text-3xl bg-white rounded-full flex justify-center items-center"><GiGearStickPattern /></div><p className="text-xs md:text-2xl text-center">{car.details.type}</p> </div>
<div className="flex items-center justify-center flex-col"><div className="  size-8 text-md md:size-14 md:text-3xl bg-white rounded-full flex justify-center items-center"><FaCar /></div> <p className="text-xs md:text-2xl text-center  text-nowrap">{car.details.person} seats</p>   </div>
</div>

     );
} 
 
export default CarOptions