import { useState } from "react";

import login from '@/assets/Enter-Password-1--Streamline-Brooklyn.png'
import { LuEye,LuEyeClosed  } from "react-icons/lu";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-7xl">
        <div className="hidden md:flex items-center justify-center bg-gray-100">
          <img
            src={login}
            alt="Login Illustration"
            className="w-4/5"
          />
        </div>


        <div className="flex flex-col justify-center px-8 py-12">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Get Started Now
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Enter your credentials to login your account
          </p>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="jhon@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 "
              >
                {showPassword ? <LuEye size={26} /> : <LuEyeClosed size={26}/>}
              </button>
            </div>
          </div>

      
          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md hover:shadow-lg">
            Login
          </button>

        </div>
      </div>
    </div>
  );
}
