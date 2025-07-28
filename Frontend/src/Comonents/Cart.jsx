import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  // ✅ Calculate Total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const proceedPayment = async () => {
    try {
      // 🔶 Create Razorpay order via backend
      const { data: order } = await axios.post(
        "http://localhost:4001/create-order",
        {
          amount: totalAmount,
        }
      );

      const options = {
        key: "rzp_test_krlMDH6Xi6Sjmj", // replace with real/public key
        amount: order.amount,
        currency: order.currency,
        name: "Burger Store",
        description: "Order Payment",
        order_id: order.id,
        handler: function (response) {
          toast.success("Payment Successful! 🤑");
          console.log("Payment ID:", response.razorpay_payment_id);
          // Optional: Send response to backend for verification
        },
        prefill: {
          name: "Vandana Verma",
          email: "vandana@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F59E0B",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        toast.error("Payment failed! ❌ Please try again.");
        console.error(response.error);
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong with payment 😓");
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
        <span className="text-amber-500">
          <FaShoppingCart />
        </span>
        Cart Item
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            ))}
          </div>

          {/* ✅ Cart Summary */}
          <div className="mt-6 p-4 border rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
            <p className="text-lg">
              Total Amount: <span className="font-bold">₹{totalAmount}</span>
            </p>
            <button
              onClick={proceedPayment}
              className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded cursor-pointer transition duration-300"
            >
              Proceed to Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
