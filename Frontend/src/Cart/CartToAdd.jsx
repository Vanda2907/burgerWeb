import React from "react";
import Navbar from "../Comonents/Navbar";
import Cart from "../Comonents/Cart";
import Footer from "../Comonents/Footer";

function CartToAdd() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="min-h-screen">
          <Cart />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CartToAdd;
