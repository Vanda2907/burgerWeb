import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Menus from "./Menu/Menus";
import SignUp from "./Comonents/SignUp";
import Contact from "./Contact/Contact";
import About from "./About/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartProvider"; // ✅ Importing CartProvider
import CartToAdd from "./Cart/CartToAdd";

function App() {
  const [authUser] = useAuth();
  console.log("Auth User:", authUser);

  return (
    <>
      <CartProvider>
        {" "}
        {/* ✅ Wrapping everything inside CartProvider */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={authUser ? <Menus /> : <Navigate to="/signup" />}
            />
            <Route
              path="/cart"
              element={authUser ? <CartToAdd /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/aboutUs" element={<About />} />
          </Routes>
          <Toaster />
        </div>
      </CartProvider>{" "}
      {/* ✅ Closing CartProvider */}
    </>
  );
}

export default App;
