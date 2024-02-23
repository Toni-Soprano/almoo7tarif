import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import Profile from "./profile";
import { Link } from "react-router-dom";
import Security from "./security";

function Settings() {
  const [selectedSection, setSelectedSection] = useState("settings");
  return (
    <div className="container-fluid   ">
      <div className="row">
        <div className=" bg-gradient-to-r from-blue-300 via-blue-800 to-blue-500 col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a
              onClick={() => setSelectedSection("settings")}
              className={`text-decoration-none d-none d-sm-inline text-white  d-flex align-items-center justify-content-center ${
                selectedSection === "settings" ? "active" : ""
              }`}
            >
              <span>
                {" "}
                <Link to="/home">
                  {" "}
                  <img src="assets/img/logo.png" className="mx-auto" />
                </Link>
              </span>
            </a>
            <hr className="text-secondary p-4" />
            <ul className="nav nav-pills  flex-column">
              <li className="nav-item   fs-4 my-1">
                <a
                  onClick={() => setSelectedSection("settings")}
                  className={`nav-link text-white fs-4 ${
                    selectedSection === "settings" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-gear ">
                    {" "}
                    <span className="ms-2 d-none d-sm-inline">Settings</span>
                  </i>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  onClick={() => setSelectedSection("profile")}
                  className={`nav-link text-white fs-5 ${
                    selectedSection === "profile" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-person-circle"></i>
                  <span className="ms-2 d-none d-sm-inline">My account</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  onClick={() => setSelectedSection("My appointments")}
                  className={`nav-link text-white fs-5 ${
                    selectedSection === "My appointments" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    My appointments
                  </span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  onClick={() => setSelectedSection("Products")}
                  className={`nav-link text-white fs-5 ${
                    selectedSection === "Products" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Products</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <a
                  onClick={() => setSelectedSection("Privacy & Security")}
                  className={`nav-link text-white fs-5 ${
                    selectedSection === "Privacy & Security" ? "active" : ""
                  }`}
                >
                  <i className="bi bi-lock"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Privacy & Security
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <div className="container  ">
            {selectedSection === "settings" && (
              <p>Settings content goes here</p>
            )}
            {selectedSection === "profile" && <Profile />}
            {selectedSection === "Privacy & Security" && <Security />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
