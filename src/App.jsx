import React,{ useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../src/Components/Navbar";
import Banner from "../src/Components/Banner";
import Html from "../src/Components/Html";
import Css from "../src/Components/Css";
import JavaScript from "../src/Components/JavaScript";
import Tailwind from "../src/Components/Tailwind";
import Target from "../src/Components/Target";
import Last from "../src/Components/Last";
import SliderSlick from "../src/Components/SliderSlick";
import Team from "../src/Components/Team";
import MainContent from "./Components/MainContent";
import { LiaStarSolid } from "react-icons/lia";
const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <MainContent/>
      <SliderSlick />
      <Team paragraph="Before starting this online course I was in confusion about it's
            benefits but now I can confidently say that after completing this
            course I will be able to declare myself as a confident Front-end web
            developer. So, I am greatful to Wasim sir and 'Creative It' for
            their professionalism."/>
      <Last />
      
    </div>
  );
};

export default App;
