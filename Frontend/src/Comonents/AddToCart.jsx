import React from "react";
import { useCart } from "../context/CartContext";

const AddToCart = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(item)} className="btn btn-primary btn-sm rounded-full">
      Add to Cart
    </button>
  );
};

export default AddToCart;
