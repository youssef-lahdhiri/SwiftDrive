import { div } from "framer-motion/m";
import cars from "@/app/data/types.json";
import CarCard from "./car-card";
const CarTypes = () => {
    return ( 
        <>
<div className="w-fit text-center mt-20 mx-auto  font-bold text-6xl">WIDE RANGE OF <br /> VEHICLES</div>

       <div  id="cars" className="w-[calc(100%-40px)]  mt-10 md:w-3/4    flex flex-wrap mx-auto gap-4">
        {cars.map((car, index) => (
            <CarCard car={car}/>

        ))}

       </div></>
     );
}
 
export default CarTypes;