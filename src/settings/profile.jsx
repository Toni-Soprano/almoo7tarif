import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { FaTransgender } from "react-icons/fa";
import { Button } from "react-bootstrap";

function Profile() {
  const [user, setUser] = useState("");
  const [initialValues, setInitialValues] = useState({});
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [bd, setBd] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem("id");

      try {
        const response = await axios.post(
          "http://localhost:3900/api/GetSingleUser",
          { userId: id }
        );
        if (response.data.msg === "ok") {
          const userData = response.data.user;
          setUser(userData);
          setNom(userData.nom);
          setPrenom(userData.prenom);
          setTel(userData.tel);
          setGenre(userData.genre);
          setBd(userData.date_naissance);
          setEmail(userData.email);
          setInitialValues({
            nom: userData.nom,
            prenom: userData.prenom,
            tel: userData.tel,
            genre: userData.genre,
            bd: userData.date_naissance,
            email: userData.email,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (e) => {
    e.preventDefault();

    // Check if any field has been changed
    const isChanged = Object.keys(initialValues).some(
      (key) => initialValues[key] !== eval(key)
    );

    if (!isChanged) {
      Swal.fire("Error", "No changes made", "error");
      return;
    }

    const id = localStorage.getItem("id");

    try {
      const res = await axios.post("http://localhost:3900/api/UpdateUser", {
        idUser: id,
        nom,
        date_naissance: bd,
        prenom,
        genre,
        email,
        tel,
      });
      if (res.data.msg === "ok") {
        Swal.fire("Success", "User updated successfully", "success");
      } else {
        Swal.fire("Error", res.data.msg, "error");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire("Error", "Failed to update user", "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="bg-blue-700">
        <h1 className="m-5 p-10 text-center">My account</h1>
      </div>
      <Form onSubmit={handleChange}>
        <div className="row m-6 p-10">
          <Form.Group controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="prenom">
            <Form.Label>Prenom</Form.Label>
            <Form.Control
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Label>genre</Form.Label>
          <Form.Group controlId="nom">
            <Form.Select
              className=" "
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              defaultValue="  "
            >
              
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="tel">
            <Form.Label>Tel</Form.Label>
            <Form.Control
              type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="bd">
            <Form.Label>bd</Form.Label>
            <Form.Control
              type="text"
              value={bd}
              onChange={(e) => setBd(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-evenly">
          <Button variant="primary" type="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Profile;
