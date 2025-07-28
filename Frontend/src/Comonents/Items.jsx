import React from "react";
import AddToCart from "./AddToCart";
import axios from "axios";
import { toast } from "react-hot-toast";

const proceedPayment = async (item) => {
  try {
    const { data: order } = await axios.post(
      "http://localhost:4001/create-order",
      {
        amount: item.price,
      }
    );

    const options = {
      key: "rzp_test_krlMDH6Xi6Sjmj", // Your Razorpay test key
      amount: order.amount,
      currency: order.currency,
      name: "Burger Store",
      description: `Payment for ${item.name}`,
      order_id: order.id,
      handler: function (response) {
        toast.success("✅ Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
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
      toast.error("❌ Payment failed!");
      console.error(response.error);
    });
  } catch (error) {
    console.error("Payment error:", error);
    toast.error("Something went wrong with payment 😓");
  }
};
function Items({ item }) {
  return (
    <>
      <div className="card w-72 md:w-80 shadow-2xl hover:shadow-blue-500 my-5 mx-auto cursor-pointer hover:scale-105 transition duration-200">
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

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => proceedPayment(item)}
              className="btn btn-primary btn-sm rounded-full"
            >
              Buy Now
            </button>

            <AddToCart item={item} />
          </div>

          <div className="border border-amber-600 text-sm font-bold text-white p-2 rounded-full bg-amber-400 w-fit">
            ₹ {item.price}
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
