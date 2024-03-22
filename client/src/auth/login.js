import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:3900/api/login", {
        email: values.email,
        password: values.password,
      });

      if (response.data.msg === "Utilisateur non trouvé") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Utilisateur non trouvé",
        });
      } else if (response.data.msg === "Mot de passe incorrect") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Mot de passe incorrect",
        });
      } else if (response.data.msg === "ok") {
        localStorage.setItem("name", response.data.user.nom);
        localStorage.setItem("id", response.data.user._id);
        localStorage.setItem("img", response.data.user.image);
        localStorage.setItem("mdp", response.data.user.mdp);

        navigate("/home");
        Swal.fire({
          title: "Welcome!",
          text: "User logged in",
          icon: "success",
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
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <Form onFinish={handleSubmit} layout="vertical">
          <div className="text-center mb-6">
            <img
              className="h-48 w-auto mx-auto"
              src="/assets/img/logo.png"
              alt="Logo"
            />
            <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          </div>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              prefix={<i className="far fa-envelope"></i>}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              prefix={<i className="fas fa-lock"></i>}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Login
            </Button>
          </Form.Item>
          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LoginForm;
