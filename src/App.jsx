import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import About from "./About";
import Portfolio from "./Portfolio";
import Contactme from "./Contactme";
import Footer from "./Footer";
import "./index.css";
<<<<<<< HEAD
=======
import Favicon from "react-favicon";
import  favicon from  "./Images/1671114250642.jpg";
>>>>>>> second-main

function App() {
  return (
    <div>
     <Favicon url={favicon} />
      <Navbar />
      <HeroSection />
      <Skills />
      <About />
      <Portfolio />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
