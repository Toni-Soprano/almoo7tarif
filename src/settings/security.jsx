import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

function Security() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const id = localStorage.getItem("id");
  const mdpUser = localStorage.getItem("mdp");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3900/api/changePassword",
        {
          idUser: id,
          oldPassword,
          newPassword,
        }
      );
      if (response.data.msg === "Mot de passe ancien incorrect") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Veuillez verifier votre ancien mot de passe.",
        });
        return;
      }
      if (!confirmPassword.trim() === "Mot de passe ancien incorrect") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Veuillez entrer votre ancien mot de passe.",
        });
      }
      if (newPassword !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Le nouveau mot de passe et la confirmation ne correspondent pas.",
        });
        return;
      }

      if (response.data.msg === "Utilisateur non trouvé") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Utilisateur non trouvé",
        });
      } else if (!response.data.msg.mdp === "mdpUser") {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Mot de passe ancien incorrect",
        });
      } else if (response.data.msg === "ok") {
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: "Mot de passe modifié avec succès",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Erreur lors du changement de mot de passe",
        });
      }
    } catch (error) {
      console.error("Network error:", error.message);
      Swal.fire({
        icon: "error",
        title: "Erreur réseau",
        text: "Impossible de se connecter au serveur. Veuillez réessayer plus tard.",
      });
    }
  };

  return (
    <>
      {" "}
      <div className="bg-blue-700">
        <h1 className="text-center m-5 p-10">Privacy & Security </h1>
      </div>
      <h2 className="p-3  m-2">Change password </h2>
      <hr className="m-2" />
      <div className="m-5 p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 position-relative bottom-6 m-6"
        >
          <Form.Label className="  " htmlFor="inputOldPassword">
            Old Password
          </Form.Label>
          <Form.Control
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Current password"
            type="password"
            id="inputOldPassword"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label className="  " htmlFor="inputPassword5">
            Password
          </Form.Label>
          <Form.Control
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label className="  " htmlFor="confirmPassword">
            Confirm Password
          </Form.Label>
          <Form.Control
            placeholder="Confirm new password"
            type="password"
            id="confirmPassword"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <div className="d-flex justify-content-end m-5">
            <Button className="" type="submit" variant="info  ">
              Confirm
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Security;
