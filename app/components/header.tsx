import MobileHeader from "./mobile-header";
import { BiCar } from "react-icons/bi";
const Header = () => {
    return (
        <>
        <div className=" bg-transparent w-full  items-center  border     md:px-48 md:flex hidden  justify-between  h-16 ">
            <p className="text-cente font-extrabold pl-10 flex items-center justify-center"><a href="/SwiftDrive"></a>RENTAL<BiCar /> </p>
        <ul className=" font-semibold  hidden md:flex gap-4 justify-center">
        <li className="hover:text-background text-bold"> <a href="/SwiftDrive">Home</a></li>
        <li className="hover:text-background"> <a href="/SwiftDrive/map">Rent</a></li>
        <li className="hover:text-background"><a href="/SwiftDrive/map">Ride</a></li>
        <li className="hover:text-background"><a href="/SwiftDrive">Contact</a></li>
        </ul>
        
        {/* <button className="bg-background"><a href="">Get Started</a></button> */}
        </div><MobileHeader /></>
      );
}
 
export default Header;