import React from "react";
import { Utensils, Droplet, Leaf } from "lucide-react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 m-10 px-4 flex flex-col md:flex-row pt-20 gap-8 items-center">
        {/* Carousel Section */}
        <div className="carousel rounded-3xl w-full max-w-xs md:max-w-md overflow-hidden shadow-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="burger.jpg" className="w-full h-60 object-cover" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <a href="#slide2" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="burger1.jpeg" className="w-full h-60 object-cover" />
            <div className="absolute left-2 right-2 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a href="#slide1" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="burger2.jpeg" className="w-full h-60 object-cover" />
            <div className="absolute left-2 right-2 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a href="#slide2" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="burger3.jpeg" className="w-full h-60 object-cover" />
            <div className="absolute left-2 right-2 top-1/2 transform -translate-y-1/2 flex justify-between">
              <a href="#slide3" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle border-none bg-amber-500 text-white hover:scale-110">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 px-2">
          <h1 className="text-3xl font-bold text-center md:text-left">
            Enjoy and Build your Burger — Make Your Tummy Happy and
            <span className="text-amber-500"> Burgerlicious Everyday!</span>
          </h1>
          <p className="text-base text-justify py-4">
            A burger is more than just a meal — it’s an experience. With layers of juicy,
            flame-grilled patties, fresh veggies, melted cheese, and signature sauces tucked
            between soft, toasted buns, burgers bring together bold flavors in every bite.
            Whether you crave classic simplicity or love gourmet toppings, burgers offer
            something for everyone.
          </p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 py-4">
            <div className="flex flex-col items-center">
              <Utensils className="text-yellow-500 w-10 h-10 mb-2" />
              <p className="text-lg font-semibold">Delicious</p>
            </div>
            <div className="flex flex-col items-center">
              <Droplet className="text-yellow-500 w-10 h-10 mb-2" />
              <p className="text-lg font-semibold">Fresh</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="text-yellow-500 w-10 h-10 mb-2" />
              <p className="text-lg font-semibold">Organic</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="bg-yellow-400 text-black py-2 px-6 font-medium rounded-2xl hover:bg-yellow-300 transition hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
