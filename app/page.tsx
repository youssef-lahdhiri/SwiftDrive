import Image from "next/image";
import Header from "./components/header";
import Incline from "./components/incline-bg";
import Select from "./components/select-section";
import headerBg from "@/public/assets/header-bg.png";
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
    className="  h-[80vh] sm:h-[100vh] ">
        {/* <Image
        src={headerBg}
        alt="Header Background"
        layout="fill"
        objectFit="cover"
      /> */}
    

      <Header />
       <Main/>
       <Select />
      <Incline />
      <ScrollButton />
      <CarTypes />
      <MbApp />
      <Footer />
    </div>
  );
}
