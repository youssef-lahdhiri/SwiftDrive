"use client"

import { motion } from 'framer-motion';

const Main = () => {
    return ( 

        <motion.div
        initial={{ y:100, opacity:0 }}
        animate={{  y:0, opacity:1 }}
        transition={{delay:0.2, duration:0.5}}
        >

            <h1 className="font-bold text-7xl text-center mt-20"> 
            PREMIUM CAR <br /> RENTAL
            </h1>
        </motion.div>
     );
}
 
export default Main;