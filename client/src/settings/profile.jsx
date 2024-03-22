import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Profile() {
  const [user, setUser] = useState({});
  const [initialValues, setInitialValues] = useState({});
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [bd, setBd] = useState("");
  const [genre, setGenre] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const oldImg = localStorage.getItem("img");
  const userId = localStorage.getItem("id");

  useEffect(() => {
    if (!userId) {
      Swal.fire("Error", "User ID not found", "error");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3900/api/GetSingleUser",
          { userId: userId }
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
        } else {
          Swal.fire("Error", "User not found", "error");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to fetch user data", "error");
      }
    };
    fetchData();
  }, [userId]);

  const handleChange = async (e) => {
    e.preventDefault();
    const isChanged =
      Object.keys(initialValues).some(
        (key) => initialValues[key] !== eval(key)
      ) || image !== null;
  
    if (!isChanged) {
      Swal.fire("Error", "No changes made", "error");
      return;
    }
  
    const id = localStorage.getItem("id");
  
    try {
      const formData = new FormData();
      formData.append("idUser", id);
      formData.append("nom", nom);
      formData.append("date_naissance", bd);
      formData.append("prenom", prenom);
      formData.append("genre", genre);
      formData.append("email", email);
      formData.append("tel", tel);
      formData.append("image", image);
  
      const res = await axios.post("http://localhost:3900/api/UpdateUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
  
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mt-4">
            <div className="card-body d-flex flex-column align-items-center">
              <Avatar
                size={120}
                icon={<UserOutlined />}
                src={imageURL ? imageURL : `http://localhost:3900/Public/uploads/${oldImg}`}
              />
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mt-4">
            <div className="card-header">
              <h4>My Account Settings</h4>
            </div>
            <div className="card-body">
              <Form onSubmit={handleChange}>
                <div className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label>Prenom</Form.Label>
                  <Form.Control type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Select value={genre} onChange={(e) => setGenre(e.target.value)} required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </div>
                <div className="mb-3">
                  <Form.Label>Tel</Form.Label>
                  <Form.Control type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className="mb-3">
                  <Form.Label>Date de naissance</Form.Label>
                  <Form.Control type="date" value={bd} onChange={(e) => setBd(e.target.value)} />
                </div>
                <Button type="primary" htmlType="submit">
                  Save Changes
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
