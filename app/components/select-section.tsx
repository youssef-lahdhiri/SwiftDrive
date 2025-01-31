"use client"
import {motion} from "framer-motion";
import { BiSearch } from "react-icons/bi";

const Select = () => {
    return ( 
        <motion.div 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay:0.7, duration:0.5}}
        className=" mt-10 w-1/2 h-20 shadow-md justify-between items-center flex  mx-auto gap-4 bg-white">

<div>
    pick up location
</div>
<div>
start
</div>
<div>
end
</div>
<div className="text-white bg-black text-3xl  h-10 w-10 flex items-center justify-center rounded-md "><BiSearch /></div>
        </motion.div>
     );
}
 
export default Select;
