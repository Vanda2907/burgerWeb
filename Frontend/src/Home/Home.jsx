import React, { useState } from "react";
import Navbar from "../Comonents/Navbar";
import Banner from "../Comonents/Banner";
import Footer from "../Comonents/Footer";
import Card from "../Comonents/Card";

function Home() {
   const [cartItems, setCartItems] = useState([]);
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  return (
    <div>
      <Navbar cartCount={cartItems.length}  theme={theme}
        setTheme={setTheme}/>
      <Banner/>
      <Card cartItems={cartItems} setCartItems={setCartItems}/>
      <Footer/>
    </div>
  );
}

export default Home;
