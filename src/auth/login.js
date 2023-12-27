import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
      {/* Left Side (Photo as Background) */}
      <div className="w-1/2 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/elect2.jpg)' }}>
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-1/2 p-8 flex items-center justify-center bg-white">
        <form className="bg-white shadow-md rounded px-8 py-6 w-96 ">
          {/* Logo inside the form */}
          <div className="mb-6 text-center">
            <img src="/assets/img/logo.png" alt="logo" className=" w-100 h-100 mx-auto mb-4" />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
                required
              />
              <FaUser className="absolute text-gray-500 right-2 top-2" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
                required
              />
              <FaLock className="absolute text-gray-500 right-2 top-2" />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label htmlFor="remember" className="flex items-center cursor-pointer">
              <input type="checkbox" id="remember" className="mr-2" />
              <span className="text-sm">Remember me</span>
            </label>
            {/* Add a link or content for "Forgot Password?" here */}
            <Link to="/" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Register now!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
