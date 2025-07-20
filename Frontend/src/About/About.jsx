import React from "react";
import Navbar from "../Comonents/Navbar";
import AboutUs from "../Comonents/AboutUs";
import Footer from "../Comonents/Footer";

function About() {
  return (
    <>
       <div>
        <div>
          <Navbar />
        </div>
        <div className="mt-16">
          <AboutUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
};

export default About;
