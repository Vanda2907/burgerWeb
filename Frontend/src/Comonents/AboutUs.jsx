import React from "react";
import { FaHamburger, FaSmileBeam } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center p-6 mb-4">
        <h1 className="text-4xl font-bold text-orange-700 mb-4 text-center">
          🍔 About <span className="text-orange-600">BurgerHub</span>
        </h1>

        <p className="text-center max-w-2xl mb-8">
          At <span className="font-semibold text-orange-600">BurgerHub</span>,
          we craft burgers that make your taste buds dance! Every burger is made
          with love, fresh ingredients, and a lot of passion.
        </p>

        {/* Hero Image */}
        <div className="mb-10 ml-80">
          <img
            src="/b1.png"
            alt="Delicious Burger"
            className="rounded-2xl shadow-xl max-w-3xl hover:scale-105 transition duration-300 size-7/12"
          />
        </div>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
          <div className="bg-white shadow-xl rounded-2xl p-6 flex-1 text-center hover:scale-105 transition duration-300">
            <FaHamburger className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              From a small food truck in 2024 to your favorite burger joint, our
              journey is all about flavors that bring people together.
            </p>
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Our Story Burger"
              className="rounded-xl shadow-md w-full h-48 object-cover"
            />
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 flex-1 text-center hover:scale-105 transition duration-300">
            <FaSmileBeam className="text-4xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              Bringing happiness in every bite! We believe a great burger can
              turn any moment into a special memory.
            </p>
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90"
              alt="Our Mission Burger"
              className="rounded-xl shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg">
            🍽️ Join the{" "}
            <span className="font-semibold text-orange-600">BurgerHub</span>{" "}
            family — where every burger tells a story!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
