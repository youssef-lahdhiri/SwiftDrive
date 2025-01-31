const Header = () => {
    return (
        <div className="pt-10 bg-transparent w-full align-center px-48 flex  justify-between  h-10 ">
            <p className="text-cente font-extrabold">RENTAL</p>
        <ul className=" font-semibold  hidden md:flex gap-4 justify-center">
        <li className="hover:text-background text-bold"> <a href="">Home</a></li>
        <li className="hover:text-background"> <a href="">Rent</a></li>
        <li className="hover:text-background"><a href="">Ride</a></li>
        <li className="hover:text-background"><a href="">Contact</a></li>
        </ul>
        <button className="bg-background"><a href="">Get Started</a></button>
        </div>
      );
}
 
export default Header;