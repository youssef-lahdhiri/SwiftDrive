"use client"
import { useState } from "react";
const MobileHeader = () => {
    const [open, setOpen] = useState(false);
    const handelClick=()=>{
        const open=document.getElementById("open")

        const lower=document.getElementById("lower")
        setOpen((prev)=>{
            if(!prev){   lower?.classList.add("w-[35px]")
        lower?.classList.remove("w-[20px]")
    open?.classList.remove("h-0")
    open?.classList.add("h-[50vh]")
    
    }
    else{lower?.classList.add("w-[20px]");
        lower?.classList.remove("w-[35px]")
        open?.classList.remove("h-[50vh]")
        open?.classList.add("h-0")
    }
          return   !prev})
     

    }
    return ( 
        <div>
<div className=" w-full bg-background h-20 text-white font-bold text-3xl md:hidden flex items-center justify-between px-3 "><p>RENTAL </p>
        <div  onClick={handelClick} className="flex flex-col  h-[20px] gap-1 z-[10] relative ">
            
           <div className="h-1 rounded-md bg-white w-[35px]"></div>
           <div className="h-1 rounded-md bg-white w-[35px]"></div>
           <div  id="lower" className="z-[99] duration-150 right-0 absolute bottom-0 h-1 rounded-md bg-white w-[20px]"></div>

        </div></div>
        <div>
       
            <div id="open" className=" text-white overflow-hidden  font-semibold absolute right-0 duration-500  h-0 top-20 z-[9]  w-full bg-background items-center justify-around  flex flex-col gap-2"> 
                <p> <a href="/SwiftDrive">Home</a></p>
                <p> <a href="/SwiftDrive/map">Cars</a></p>
                <p> <a href="/SwiftDrive/map">Map</a></p>
                <p>Contact</p></div>
               
        </div>
        </div>

     );
}
 
export default MobileHeader;