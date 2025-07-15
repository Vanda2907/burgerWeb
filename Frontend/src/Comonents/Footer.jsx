import React from "react";

function Footer() {
  return (
    <>
      <hr className="my-4" />
      <footer className="bg-base-200 text-base-content rounded py-10 px-4 flex flex-col items-center gap-6">
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        <nav>
          <div className="flex gap-6 justify-center">
            <a href="#">
              {/* Twitter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:scale-110 transition"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.86 9.86 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.942 13.942 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.916 4.916 0 0 0 3.946 4.816 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a href="#">
              {/* YouTube Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:scale-110 transition"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.489 3.45.03 5.804 0 12c.03 6.185.489 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.998v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#">
              {/* Facebook Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:scale-110 transition"
              >
                <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
          </div>
        </nav>

        <aside className="text-center text-xs md:text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} — All rights reserved by ACME
            Industries Ltd.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
