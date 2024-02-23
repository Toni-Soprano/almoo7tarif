import { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaCalendarAlt,
  FaPhone,
  FaTransgender,
  FaCamera,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const SignupForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [date_naissance, setDateNaissance] = useState("");
  const [genre, setGenre] = useState("");
  const [profilePicture, setProfilePicture] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("email", email);
      formData.append("mdp", password);
      formData.append("tel", tel);
      formData.append("date_naissance", date_naissance);
      formData.append("genre", genre);
      formData.append("image", profilePicture);

      const response = await axios.post(
        "http://localhost:3900/api/RegistreUser",
        formData
      );

      if (response.data.msg === "ok") {
        Swal.fire({
          title: "Good job!",
          text: "User registred",
          icon: "success",
        });
        console.log("Signup successful");
        localStorage.setItem("name", response.data.user.nom);
        localStorage.setItem("img", response.data.user.profilePicture);
        navigate("/home");
      }
      if (response.data.msg === "Utilisateur existe") {
        Swal.fire({
          icon: "error",
          title: "Error...",
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-600 to-blue-600">
      <div className="bg-gradient-to-r from-blue-300 via-blue-1000 to-blue-500 flex flex-col md:flex-row rounded-2xl shadow-lg  p-4 items-center">
        <div className="md:w-1/2 w-full   ">
          <div className="rounded-2xl border-4 border-gray-300 overflow-hidden">
            <img
              className="w-full"
              src="assets/img/paaaaaaaaaaaa-removebg-preview.png"
              alt="Signup Image"
            />
          </div>
        </div>

        <div className="   flex flex-col   rounded-2xl">
          <img className=" mx-auto" src="assets/img/logo.png" alt="Logo" />
          <h1 className="text-center font-bold text-2xl   text-white  ">
            Sign Up
          </h1>

          <Form className="  p-4 mb-4" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  required
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="First name"
                  value={nom}
                />
              </Col>
              <Col>
                <Form.Control
                  required
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Last name"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </Col>
              <Col>
                <Form.Control
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />{" "}
              </Col>
            </Row>
            <Row className="mb-3">
              {" "}
              <Col>
                <Form.Control placeholder="Confirm password" />{" "}
              </Col>
              <Col>
                <Form.Control
                  required
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="Phone number"
                />{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)} required defaultValue=" ">
                  <option>Select gender </option>
                  <option>Male</option>
                  <option>Female</option>
                  <FaTransgender className="absolute top-1/2 right-3 -translate-y-1/2" />
                </Form.Select>
              </Col>
              <Col>
                <Form.Control
                  required
                  type="date"
                  onChange={(e) => setDateNaissance(e.target.value)}
                  value={date_naissance}
                  placeholder="Birthday"
                  className="form-control"
                />{" "}
              </Col>
            </Row>
            <Row className="m-3">
              <Col className="flex items-center justify-content-center">
                <label
                  htmlFor="profilePicture"
                  className="cursor-pointer p-3  rounded-lg border bg-gray-200 hover:bg-gray-300"
                >
                  <FaCamera />
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                />
                {profilePicture && (
                  <span className="text-gray-500">{profilePicture.name}</span>
                )}
              </Col>
            </Row>
            <button
              type="submit"
              className="bg-[#002D74] rounded-xl  w-100 text-white py-2 mt-4 hover:scale-105 duration-300"
            >
              Sign Up
            </button>
          </Form>
          <div className=" mb-5 items-center text-gray-800">
            <p className="text-center text-sm">OR</p>
          </div>
          <div className=" items-center m-4">
            <button className="bg-white border py-2 w-full rounded-xl mb-6 position-relative bottom-10   items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <Link to="/login">Log In</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
