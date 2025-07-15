import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-md border border-amber-400 shadow-xl rounded-3xl p-6 flex flex-col items-center">
            <form method="dialog" className="self-end">
              <button className="btn btn-sm btn-circle btn-ghost hover:bg-red-100">
                ✕
              </button>
            </form>
            <h1 className="font-bold text-3xl text-amber-700 text-center mb-4">
              Welcome Back!
            </h1>

            <div className="w-full max-w-xs">
              <div className="text-sm font-semibold text-gray-700 mb-1">
                Email
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="grow bg-transparent focus:outline-none"
                />
              </label>

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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  className="grow bg-transparent focus:outline-none"
                />
              </label>

              <div className="flex justify-center mb-3">
                <button
                  type="submit"
                  className="btn w-full bg-amber-500 text-white hover:bg-amber-700 hover:scale-105 transition-transform duration-200 shadow-md"
                >
                  Log In
                </button>
              </div>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?
              </div>
              <div className="flex justify-center mt-2">
                <Link to="/signup">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn w-full border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white hover:scale-105 transition-transform duration-200 shadow-md"
                  />
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
