import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from "../assets/Item.json";
import Items from "./Items";

function Card() {
  const filterData = Item.filter((data) => data.type === "all");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 text-center my-10">
        <span className="text-xl md:text-4xl font-bold border-2 border-amber-400 bg-amber-400 hover:bg-amber-500 text-white rounded-3xl py-2 px-4 inline-block transition duration-200">
          Today's Offer for You 🔥 :)
        </span>
      </div>

      <div className="slider-container max-w-screen-2xl container mx-auto px-4 md:px-20 mb-10">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2">
              <Items item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Card;
