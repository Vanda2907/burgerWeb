import React from "react";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const onLogout = () => {
    try {
      // Clear user data from context
      setAuthUser({ ...authUser, user: null });
      // Optionally, you can also clear local storage or perform other cleanup actions
      localStorage.removeItem("Users");
      console.log("User logged out successfully");
      toast.success("Logout successfully");
      // Redirect to home page or login page
      window.location.href = "/";
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Reload after 2 seconds to ensure the user data is cleared
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Reload after 2 seconds to ensure the user data is cleared
    }
  };

  return (
    <button
      onClick={onLogout}
      className="flex items-center gap-2 bg-amber-50 hover:bg-amber-500 text-white px-4 py-2 rounded-lg shadow transition hover:scale-105 duration-200 cursor-pointer font-bold border-2 border-amber-300"
    >
      <img src="/logout.png" alt="Logout" className="w-5 h-6" />
    </button>
  );
}

export default Logout;
