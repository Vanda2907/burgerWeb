import React from "react";
import Navbar from "../Comonents/Navbar";
import ContactUs from "../Comonents/ContactUs";
import Footer from "../Comonents/Footer";

function Contact() {
  return (
    <>
       <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h-screen">
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
};

export default Contact;
