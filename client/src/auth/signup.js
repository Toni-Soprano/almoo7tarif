import { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Select, Row, Col, Card, Space } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignupForm = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("nom", values.nom);
      formData.append("prenom", values.prenom);
      formData.append("email", values.email);
      formData.append("mdp", values.password);
      formData.append("tel", values.tel);
      formData.append("date_naissance", values.date_naissance);
      formData.append("genre", values.genre);
      formData.append("image", profilePicture);

      const response = await axios.post(
        "http://localhost:3900/api/RegistreUser",
        formData
      );

      if (response.data.msg === "ok") {
        Swal.fire({
          title: "Good job!",
          text: "User registered",
          icon: "success",
        });
        localStorage.setItem("name", response.data.user.nom);
        localStorage.setItem("img", response.data.user.profilePicture);
        navigate("/home");
      } else if (response.data.msg === "Utilisateur existe") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "User already exists with this email!",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full bg-white shadow-lg rounded-xl">
        <Form onFinish={handleSubmit} layout="vertical">
          <div className="text-center mb-6">
            <img className="mx-auto h-32" src="assets/img/logo.png" alt="Logo" />
          </div>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="nom"
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="prenom"
                rules={[{ required: true, message: "Please enter your last name" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter your password" }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Form.Item
                name="tel"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                name="date_naissance"
                rules={[
                  { required: true, message: "Please select your date of birth" },
                ]}
              >
                <Input
                  prefix={<CalendarOutlined />}
                  type="date"
                  placeholder="Date of Birth"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="genre"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Select placeholder="Select Gender" suffixIcon={<CameraOutlined />}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <label
                htmlFor="profilePicture"
                className="cursor-pointer p-3 rounded-lg border bg-gray-200 hover:bg-gray-300"
              >
                <CameraOutlined />
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleFileChange}
              />
              {profilePicture && (
                <span className="text-gray-500">{profilePicture.name}</span>
              )}
            </Space>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Button className="w-full bg-white border rounded-lg ">
            <Link to="/">Log In</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default SignupForm;
