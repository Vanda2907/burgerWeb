import React from "react";
import Navbar from "../Comonents/Navbar";
import Menu from "../Comonents/Menu";
import Footer from "../Comonents/Footer";

function Menus() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h-screen">
          <Menu />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Menus;
