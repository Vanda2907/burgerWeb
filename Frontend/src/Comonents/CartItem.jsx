import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function CartItem({ item, onRemove, onIncrease, onDecrease }) {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8 mt-15 flex flex-col md:flex-row items-center gap-4 p-4 border rounded hover:shadow transition-shadow">
        {/* ✅ Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-3xl shadow-md"
        />
        {/* ✅ Product Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold">
            {item.name}
          </h2>
          </div>
          <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg font-semibold">
            Price: ₹{item.price}
          </h2>
        </div>

        {/* ✅ Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            title="Decrease Quantity"
          >
            <FaMinus />
          </button>

          <span className="text-lg font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() => onIncrease(item.id)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            title="Increase Quantity"
          >
            <FaPlus />
          </button>
        </div>

        {/* ✅ Delete Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
          title="Remove Item"
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default CartItem;
