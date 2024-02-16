import React, { useState } from "react";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] =useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3900/api/login", {
        email,
        password,
      });

      if (response.data.msg === "Utilisateur non trouvé") {
        Swal.fire({
          icon: "error",
          title: "erreur",
          text: "Utilisateur non trouvé",
        });
        return;
      }
      if (response.data.msg === "Mot de passe incorrect") {
        Swal.fire({
          icon: "error",
          title: "erreur",
          text: "Mot de passe incorrect",
        });
        return;
      }
      if (!response.data.msg === "ok") {
        Swal.fire({
          icon: "error",
          title: "erreur",
          text: "Mot de passe incorrect",
        });
        return;
      }

      if (response.data.msg === "ok") {
        localStorage.setItem("name", response.data.user.nom);
        localStorage.setItem("img", response.data.user.image);

        navigate("/home");
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-600 to-blue-600">
      <div className="bg-gradient-to-r from-blue-300 via-blue-1000 to-blue-500 flex flex-col md:flex-row rounded-2xl shadow-lg p-4 items-center">
        <div className="p-10 md:w-1/2 w-full mr-8">
          <div className="rounded-2xl border-4 border-white overflow-hidden">
            <motion.img
              className="w-full"
              src="assets/img/paaaaaaaaaaaa-removebg-preview.png"
              alt="Signup Image"
              animate={{ x: [3, 5, 3], opacity: 1, scale: 1.2 }}
              transition={{
                duration: 5,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.2],
              }}
              whileHover={{ scale: 1.2 }}
            />
          </div>
        </div>

        <div className="md:w-1/2 px-4 md:px-8 text-center">
          <img
            className="position-relative bottom-6 mx-auto"
            src="assets/img/logo.png"
            alt="Logo"
          />

          <h1 className="font-bold P-2 text-2xl text-white mb-6">Login</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-4 position-relative bottom-6 m-6"
          >
            <Row className="m-2">
              <Col>
                <Form.Control
                required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <Form.Control
                required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <div className="m-4">
              <button
                type="submit"
                className="bg-[#002D74] w-50 rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </div>
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
