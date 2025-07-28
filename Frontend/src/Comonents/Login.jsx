import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", {
        email: data.email,
        password: data.password,
      });
      console.log(res.data);
      toast.success("User logged in successfully!");
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      window.location.reload();
      document.getElementById("my_modal_3").close();
      // ✅ Navigate to Home after login
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Login failed!! Please try again!!"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Reload after 1 second to ensure the user data is set
      document.getElementById("my_modal_3").close();
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-md border border-amber-400 shadow-xl rounded-3xl p-6 flex flex-col items-center">
        <button
          className="btn btn-sm btn-circle btn-ghost hover:bg-red-100 self-end text-gray-700 dark:text-black"
          onClick={() => document.getElementById("my_modal_3").close()}
        >
          ✕
        </button>

        <h1 className="font-bold text-3xl text-amber-700 text-center mb-4">
          Welcome Back!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
          {/* Email */}
          <div className="text-sm font-semibold text-gray-700 mb-1">Email</div>
          <label className="input input-bordered flex items-center gap-2 mb-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <svg
              className="h-5 w-5 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Your Email"
              className="grow bg-transparent focus:outline-none dark:placeholder:text-black placeholder:text-gray-500"
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <div className="text-sm font-semibold text-gray-700 mb-1">
            Password
          </div>
          <label className="input input-bordered flex items-center gap-2 mb-3 rounded-lg bg-white/50 backdrop-blur-sm">
            <svg
              className="h-5 w-5 text-amber-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="grow bg-transparent focus:outline-none dark:placeholder:text-black placeholder:text-gray-500"
            />
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="btn w-full bg-amber-500 text-white hover:bg-amber-700 hover:scale-105 transition-transform duration-200 shadow-md mb-3"
          >
            Log In
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don't have an account?
        </div>
        <Link to="/signup" className="w-40 flex justify-center mt-2">
          <button className="btn w-full border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white hover:scale-105 transition-transform duration-200 shadow-md">
            Sign Up
          </button>
        </Link>
      </div>
    </dialog>
  );
}

export default Login;
