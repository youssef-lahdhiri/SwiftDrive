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
    style={{backgroundImage: `url("/SwiftDrive/assets/header-bg.png")`}}
    className="  h-[80vh] w-full sm:h-[100vh] ">
      <Header />
       <Main/>
      <div className=" w-2/3 md:w-1/2 mx-auto relative user-select-none" 
     
      > <div id='overlay'  className=" hidden w-full h-full bg-black opacity-60  shadow-black shadow-xl  absolute text-white font-bold text-2xl top-0 text-center pt-5"> </div> <Select /></div>
      <ClientComponent />
      <ScrollButton />
      <CarTypes />
      <MbApp />
      <Footer />
    </div>
  );
}
