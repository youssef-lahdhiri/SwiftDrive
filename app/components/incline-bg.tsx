
"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import bg from "@/public/assets/header.png"
const Incline = () => {
   const isSmall=(typeof window!=undefined)?window.matchMedia("(max-width: 640px)").matches:null;
    const variants = isSmall?
        {  y:-300, opacity:1} :{ y:-400, opacity:1  }  
    return ( 
<div className="relative">
        <div className="relative sm:mt-[200px] ">
           
  <div className="bg-background  mt-20 h-[5rem] w-full rotate-[-4deg]"></div>
        <div className="bg-background   h-[10rem] w-full "></div>
        <div className="bg-background  absolute  right-0 top-0 size-[15rem] w-1/2 float-right "></div>

        </div>
        <motion.div
            initial={{ y:0, opacity:0,  }}
            animate={variants}
            transition={{delay:1,duration:0.5}}
            ><Image className="absolute z-[999] right-1/2 translate-x-1/2  top-[-10%] sm:top-[-50%]  " alt="hero bg" layout="auto"  src={bg}/>
            </motion.div>
            </div>
     );
}
 
export default Incline;