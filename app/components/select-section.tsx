"use client"
import places from "../data/places.json";
import {motion} from "framer-motion";
import { BiSearch } from "react-icons/bi";
import useStore from "../store/store";

const Select = () => {
    const setDuration=useStore((state)=>state.setDuration)
   
    const handelClick=() => {
        const start = document.getElementById("start") as HTMLInputElement;
        const end = document.getElementById("end") as HTMLInputElement;
        console.log(new Date(start.value).getDate()-new Date(end.value).getDate())
      setDuration(new Date(start.value).getDate()-new Date(end.value).getDate())
          document.getElementsByClassName("carSwiper")[0].scrollIntoView({behavior:"smooth"})
    }
    const setPlace = useStore((state) => state.setPlace);   
    const handelChange=(e:any)=>{
        setPlace(e.target.value)

    }
    const place=useStore((state)=>state.place)
    return ( 
        <motion.div 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:0.7, duration:0.5}}
        className=" text-center mt-10 w-full overflow-hidden md:flex-row flex-col h-[15rem] md:h-20 shadow-md justify-around  items-center flex  mx-auto gap-4 bg-white">

<div className="font-medium">
 <p className="text-center">Pick up & Return location</p>
<select onChange={handelChange} value={place} name="location"  className="w-full text-center   text-black bg-white " id="location">
{places.map((place,idx)=>(
<option key={idx} value={place.name}>{place.name}</option>

))}
</select>
</div>
<div className="flex flex-col">
    <p>Start</p>
    <input onChange={()=>console.log((document.getElementById("start") as HTMLInputElement).value)} id="start" type="date" />


</div>
<div className="flex flex-col">
    <p>Stop</p>
<input id="end" type="date" />

</div>
<div onClick={handelClick} className=" cursor-pointer text-white bg-black text-3xl  h-10 w-10 flex items-center justify-center rounded-md "><BiSearch /></div>
        </motion.div>
     );
}
 
export default Select;
