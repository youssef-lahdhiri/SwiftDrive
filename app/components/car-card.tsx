"use client"
import { FaArrowRight } from "react-icons/fa";
import {animate, motion} from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";
type CarType = {
    type: string;
    imgUrl: string;
}
const carCard = ({car}:{car:CarType}) => {
    return (
       <motion.div

       className="relative   rounded-xl overflow-hidden  w-full h-[350px] md:w-[calc(50%-8px)]">
        <div className="   pl-10 pt-10 absolute top-0 z-[99] text-white">
       <p className="font-extrabold text-4xl ">{car.type}</p>
        <div className=" mt-2 font-bold text-white bg-transparent z-[99] size-8  flex justify-center items-center rounded-full border"> <FaArrowRight />
        </div></div>
<div 
onMouseLeave={(e) => {e.currentTarget.classList.remove('scale-110')}}
onMouseEnter={(e) => {e.currentTarget.classList.add('scale-110')}}
style={{backgroundImage: `url(${car.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
className="absolute w-full h-full ">


</div></motion.div>
      );
}
 
export default carCard;