"use client"
import  useStore  from "../store/store";
const CarDetails = () => {
    const car = useStore((state) => state.car);
    return ( 
<div className="text-black">

{car.imgUrl}
</div>

     );
}
 
export default CarDetails;
