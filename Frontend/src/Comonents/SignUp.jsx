import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import { toast } from "react-hot-toast";

function SignUp() {
  const location = useLocation();
  const Navigate = useNavigate();
  const isLogin = location.state?.isLogin?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      console.log(res.data);
      toast.success("User signed up successfully!!");
      Navigate(isLogin, { replace: true });
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Sign up failed!! Please try again!!"
      );
    }
  };

  const password = watch("password");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-200 p-4">
        <div className="backdrop-blur-xl bg-white/40 border border-amber-300 rounded-3xl shadow-2xl p-15 w-full max-w-md transition-transform hover:scale-105 duration-300">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost hover:bg-red-100 md:ml-80 ml-60 top-0 text-gray-700 dark:text-black"
          >
            ✕
          </Link>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-amber-800 mb-6 drop-shadow">
            Join Burgerlicious!
          </h2>

          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
          >
            {/* Username */}
            <label className="input validator bg-white/50 rounded-xl border-2 border-transparent focus-within:border-amber-500 transition">
              <svg
                className="h-[1em] opacity-50 text-gray-700 dark:text-black"
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                minLength="3"
                maxLength="30"
                {...register("username", { required: "Username is required" })}
                className="bg-transparent focus:outline-none ml-2 w-full dark:placeholder:text-black placeholder:text-gray-500"
              />
            </label>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}

            {/* Email */}
            <label className="input validator bg-white/50 rounded-xl border-2 border-transparent focus-within:border-amber-500 transition">
              <svg
                className="h-[1em] opacity-50 text-gray-700 dark:text-black"
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
                required
                placeholder="Enter Email ID"
                {...register("email", { required: "Email is required" })}
                className="bg-transparent focus:outline-none ml-2 w-full dark:placeholder:text-black placeholder:text-gray-500"
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            {/* Password */}
            <label className="input validator bg-white/50 rounded-xl border-2 border-transparent focus-within:border-amber-500 transition">
              <svg
                className="h-[1em] opacity-50 text-gray-700 dark:text-black"
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
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minLength="8"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                })}
                className="bg-transparent focus:outline-none ml-2 w-full dark:placeholder:text-black placeholder:text-gray-500"
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Confirm Password */}
            <label className="input validator bg-white/50 rounded-xl border-2 border-transparent focus-within:border-amber-500 transition">
              <svg
                className="h-[1em] opacity-50 text-gray-700 dark:text-black"
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
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Confirm Password"
                minLength="8"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="bg-transparent focus:outline-none ml-2 w-full dark:placeholder:text-black placeholder:text-gray-500"
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="btn bg-amber-500 hover:bg-amber-700 text-white rounded-xl transition hover:scale-105 w-40 md:mx-20 mx-10 self-center"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm mt-4 dark:text-black text-gray-600">
            Already have an account?{" "}
            <button
              className="text-amber-800 font-semibold underline hover:text-amber-900 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Log In
              <Login />
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
