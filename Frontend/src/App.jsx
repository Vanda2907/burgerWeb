import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Menus from "./Menu/Menus";
import SignUp from "./Comonents/SignUp";

function App() {
  return (
    <>
      <div>
       {/* <Home/>
        <Menu/>*/}
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/menu" element={<Menus/>}/>
           <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
