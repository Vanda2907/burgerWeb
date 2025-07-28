import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4001/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = res;

      if (res.status === 201) {
        toast.success("✅ Message sent successfully!");
        console.log("Contact form submitted:", data.contact);
        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(`❗ ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "❗ Error sending message. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-700 mt-20 text-center">
        🍔 Contact BurgerHub
      </h1>
      <p className="text-xl text-center max-w-md p-10">
        Got questions, feedback, or want to collaborate? We’d love to hear from
        you!
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl w-full">
        {/* Contact Info */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex-1 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">
            Reach Us
          </h2>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaPhoneAlt className="text-orange-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-orange-500" />
            <span>contact@burgerhub.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>123 Burger Street, Food City</span>
          </div>
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Open Daily: 10 AM - 11 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex-1 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
        >
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">
            Send a Message
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border rounded-xl p-2 focus:ring-2 focus:ring-orange-500 outline-none bg-white text-black dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border rounded-xl p-2 focus:ring-2 focus:ring-orange-500 outline-none bg-white text-black dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border rounded-xl p-2 h-32 focus:ring-2 focus:ring-orange-500 outline-none resize-none bg-white text-black dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
