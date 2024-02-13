import { useState, useContext } from "react";
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
 

const SignupForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [date_naissance, setDateNaissance] = useState("");
  const [genre, setGenre] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
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

      if (response.data.user) {
        console.log("Signup successful");
         
        navigate("/home");
      } else {
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 via-blue-700 to-blue-1000">
      <div className="bg-gradient-to-r from-blue-400 via-blue-700 to-blue-1000 flex flex-col md:flex-row rounded-2xl shadow-lg p-5 items-center">
        <div className="md:w-1/2 w-full mr-8 ">
          <div className="rounded-2xl border-4 border-white overflow-hidden">
            <img
              className="w-full"
              src="assets/img/paaaaaaaaaaaa-removebg-preview.png"
              alt="Signup Image"
            />
          </div>
        </div>

        <div className="md:w-1/2 px-4 md:px-4 text-center flex flex-col bg-white bg-opacity-90 rounded-2xl">
          <img
            className="h-auto mx-auto"
            src="assets/img/logo.png"
            alt="Logo"
          />

          <h1 className="font-bold text-2xl text-[#002D74] uppercase">
            SIGN UP
          </h1>

          <p className="text-xs text-[#002D74]">
            If you are not a member yet, sign up now
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4  ">
            <input
              className="p-2 rounded-xl border"
              type="text"
              name="nom"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />

            <input
              className="p-2 rounded-xl border"
              type="text"
              name="prenom"
              placeholder="Prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />

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
              <FaUser className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <input
              className="p-2 rounded-xl border"
              type="tel"
              name="tel"
              placeholder="Phone Number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />

            <input
              className="p-2 rounded-xl border"
              type="date"
              name="date_naissance"
              placeholder="Date of Birth"
              value={date_naissance}
              onChange={(e) => setDateNaissance(e.target.value)}
            />

            <div className="relative">
              <select
                className="p-2 rounded-xl border w-full"
                name="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <FaTransgender className="absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="profilePicture"
                className="text-sm text-gray-600 mb-1"
              >
                Profile Picture
              </label>
              <div className="flex items-center gap-2">
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
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {profilePicture && (
                  <span className="text-gray-500">{profilePicture.name}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4 md:mt-16 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            
            <hr className="border-gray-400" />
            
          </div> <div className="flex-grow items-center m-4">
          <button className="bg-white border py-2 w-full rounded-xl mb-4    items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <Link to="/login">Log In</Link>
          </button>
         
         

         </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
