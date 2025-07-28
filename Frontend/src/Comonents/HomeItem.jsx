import React from "react";
import { Link } from "react-router-dom";

function HomeItem({ item }) {
  return (
    <>
      <div className="card w-72 md:w-80 md:h-140 shadow-2xl hover:shadow-blue-500 my-5 mx-auto cursor-pointer hover:scale-105 transition duration-200">
        <figure className="px-6 pt-6">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl h-40 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title flex flex-col items-center space-y-1">
            {item.name}
            <span
              className={`border px-2 py-1 text-xs rounded-full 
              ${
                item.category === "🟢"
                  ? "border-green-600 text-green-600"
                  : "border-red-600 text-red-600"
              }`}
            >
              {item.category}
            </span>
            <span className="badge badge-secondary">Offer</span>
          </h2>

          <p className="text-sm">{item.ingredients}</p>
          <div className="border border-amber-600 text-sm font-bold text-white p-2 rounded-full bg-amber-400 w-fit">
            ₹ {item.price}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/menu">
              <button className="btn text-dark rounded-4xl bg-amber-300 hover:bg-amber-500 duration-200 cursor-pointer font-bold border">
                For buying, Go to Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeItem;
