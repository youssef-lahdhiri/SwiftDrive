import Header from "../components/header";
import Footer from "../components/footer";
import CarShow from "../components/cars-show";
// import CarDetails from "../components/car-card";
import CarPrice from "../components/price";
import CarDetails from "../components/carDetails";
import Maps from "../components/maps";
import Select from "../components/select-section";
// import CarPrice from "../components/price";

const Home = () => {
    return ( 
        <>
        <div className="w-full h-[100vh] ">
           
<div className=""><Header /> 
   </div>
 <div className=" w-2/3 mx-auto"><Select /></div>
   <Maps />
<CarShow />
 <div className=" w-full  relative h-10"><CarDetails /></div> 

<Footer /></div>
</>
        
     );
}
 
export default Home;

