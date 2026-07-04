import React from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Optional Backend API
      await api.post("/auth/logout");

      // Token Remove
      localStorage.removeItem("token");

      // Login Page
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-900 border-b border-gray-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-lg">✨</span> Workspace
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors py-1.5"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/tasks"
              className="text-gray-600 hover:text-gray-900 transition-colors py-1.5"
            >
              Tasks
            </Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="text-red-600 bg-red-50/60 border border-red-100/50 px-4 py-2 rounded-xl hover:bg-red-50 transition-all font-medium text-xs"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;