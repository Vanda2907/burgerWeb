import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Menus from "./Menu/Menus";
import SignUp from "./Comonents/SignUp";
import Contact from "./Contact/Contact";
import About from "./About/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

function App() {
    const [authUser] = useAuth();
  console.log("Auth User:", authUser);


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={authUser ? <Menus /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/aboutUs" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
