
import { BsFileArrowDown } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
const ScrollButton = () => {
    return (
 <div className="h-[60px] flex mx-auto items-center  text-xl justify-center text-center w-[45px] absolute translate-x-1/2  right-1/2 bottom-[-125px]  rounded-full bg-background border-[7px] border-white ">

    <a  href="#cars">
        <BsArrowDown/>
    </a>
 </div>
       
      );
}
 
export default ScrollButton;