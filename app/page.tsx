"use client"
import Header from "./components/header";
import ClientComponent from "./components/inc";
import Select from "./components/select-section";
import ScrollButton from "./components/scroll-button";
import CarTypes from "./components/car-types";
import MbApp from "./components/mb-app";
import './globals.css'
import Footer from "./components/footer";
import Main from "./components/main";
export default function Home() {
  return (
    <div
    style={{backgroundImage: `url("/assets/header-bg.png")`}}
    className="  h-[80vh] w-full sm:h-[100vh] ">
      <Header />
       <Main/>
      <div className=" w-2/3 md:w-1/2 mx-auto relative user-select-none" 
      onMouseLeave={(e)=>{const doc=document.getElementById("overlay");
        doc?.classList.remove("visible");
        doc?.classList.add("hidden")}
      }
      onMouseEnter={(e)=>{const doc=document.getElementById("overlay");
      doc?.classList.add("visible");
      doc?.classList.remove("hidden")}}> <div id='overlay'  className=" hidden w-full h-full bg-black opacity-60  shadow-black shadow-xl  absolute text-white font-bold text-2xl top-0 text-center pt-5"><a href="/map">Rent Now</a> </div> <Select /></div>
      <ClientComponent />
      <ScrollButton />
      <CarTypes />
      <MbApp />
      <Footer />
    </div>
  );
}
