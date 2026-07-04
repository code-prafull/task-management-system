import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const response = await api.post("/auth/register", userData);

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50/50 px-4">
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 w-full max-w-md">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Get started by entering your details below
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="johndoe"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              className="w-full border border-gray-200 p-3 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50/30 transition-all focus:outline-none focus:border-gray-400 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="w-full border border-gray-200 p-3 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50/30 transition-all focus:outline-none focus:border-gray-400 focus:bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="w-full border border-gray-200 p-3 rounded-xl text-gray-900 placeholder-gray-400 bg-gray-50/30 transition-all focus:outline-none focus:border-gray-400 focus:bg-white text-sm"
            />
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleRegister}
          className="w-full mt-6 bg-gray-950 text-white py-3 px-4 rounded-xl text-sm font-medium hover:bg-gray-800 active:scale-[0.99] transition-all shadow-sm"
        >
          Register
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <button
            className="text-gray-900 font-semibold hover:underline ml-1.5 focus:outline-none"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;