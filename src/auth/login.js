import { useState, useContext } from "react";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUser } from './UserContext'; // Import useUser from UserContext

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Access setUser from UserContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3900/api/login", {
        email,
        password,
      });

      if (response.data.user) {
        console.log("Login successful");
        setUser(response.data.user); // Set user in context
        console.log("User data:", response.data.user);
        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "User not found or incorrect password!",
        });
      }
    } catch (error) {
      console.error("Network error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server. Please try again later.",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-1000">
      <div className="bg-gradient-to-r from-blue-400 via-blue-700 to-blue-1000 flex flex-col md:flex-row rounded-2xl shadow-lg p-5 items-center">
        <div className="md:w-1/2 w-full mr-8">
          <div className="rounded-2xl border-4 border-white overflow-hidden">
            <img
              className="w-full"
              src="assets/img/paaaaaaaaaaaa-removebg-preview.png"
              alt="Signup Image"
            />
          </div>
        </div>

        <div className="md:w-1/2 px-4 md:px-8 text-center flex flex-col bg-white bg-opacity-90 rounded-2xl">
          <img className="h-auto mx-auto" src="assets/img/logo.png" alt="Logo" />

          <h1 className="font-bold text-2xl text-[#002D74] uppercase">LOGIN</h1>

          <p className="text-xs text-[#002D74]">If you are already a member, log in now</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4 md:mt-8 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-4 md:mt-8 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <Link to="/signup">Sign Up</Link>
          </button>

          <div className="flex-grow"></div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
