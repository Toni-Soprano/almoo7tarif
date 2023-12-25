// LoginForm.jsx

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="username"
              placeholder='enter your email address'
              className="w-full p-2 border border-gray-300 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
            placeholder='enter your password'
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
          <br></br>
          <button
            type="submit"
            className="bg-white-500 text-black p-2 mr-2 rounded hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300"
          >
            Don't have an account ? 
          </button>
          <br>
          </br>
          <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-200 text-black p-2 mr-2 rounded hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register now !
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
