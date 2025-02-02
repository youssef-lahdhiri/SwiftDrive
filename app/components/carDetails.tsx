"use client"
import { ImPriceTag } from "react-icons/im";
import  useStore  from "../store/store";
const CarDetails = () => {
    const car = useStore((state) => state.car);
    return ( 
<div className="text-black  mx-auto w-1/2  ">

<div className=" absolute top-[-2rem] border border-black  bg-white px-2 text-nowrap w-1/2  rounded-md   h-fit  md:h-[10vh] text-black font-bold text-xl items-center md:gap-5  flex-col  sm:flex-row flex "> <div className="flex items-center justify-center"><ImPriceTag /> {car.details.price} EUR</div> <p className="text-gray-400">/DAY</p>
<button className="  md:ml-auto bg-background  w-fit px-2 rounded-md   text-center font-bold  size-10">Rent Now</button>
</div>


</div>

     );
}
 
export default CarDetails;
