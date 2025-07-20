import React from "react";
import Items from "./Items";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Menu() {
  const [burger, setBurger] = useState([]);
  useEffect(() => {
    const getBurger = async () => {
      try {
        const res = await axios.get("http://localhost:4001/burger");
        console.log(res.data);
        setBurger(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBurger();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 m-10 pt-20 text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-amber-500 m-2 p-2">
            Your Hunger Ends Here 🔥
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-amber-900 m-2 p-2">
            Burger Time <span className="text-pink-400">Starts Now! :)</span>
          </h1>
          <p className="text-xl text-center m-2 p-2">
            Our burgers aren’t just meals—they’re moments. Whether you're going
            for cheesy, spicy, or something in between, each bite is a
            flavor-packed celebration of good taste. Discover our mouth-watering
            burger menu packed with bold flavors and fresh ingredients. Whether
            you're craving something classic or feeling adventurous, we've got
            the perfect stack waiting just for you.From juicy beef patties to
            crispy veggie options, our burgers are crafted with care and grilled
            to perfection. Served hot and fresh, each bite delivers a satisfying
            crunch and unforgettable taste.
          </p>
          {/*    <Link to="/">
            <button className="bg-pink-400 text-2xl text-amber-50 px-4 py-2 rounded-4xl hover:bg-pink-600 m-5">
              Back
            </button>
          </Link>
          */}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {burger.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
