import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Settings() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-black col-auto col-md-3 min-vh-100">
            <a className="text-decoration-none text-white d-flex align-items-center justify-content-center">
              <img src="assets/img/logo.png" className="" />
            </a>
            <hr />
            <ul class="nav nav-pills flex-column">
              <li class="nav-item text-white fs-4">
                <a href="#" class="nav-link active" aria-current="page">
                  <i className="bi bi-gear"> Settings</i>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-person-circle"></i>
                  <span className="ms-2">My account</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2">My appointments</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2">Products</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4">
                <a
                  href="#"
                  class="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <i className="bi bi-lock"></i>
                  <span className="ms-2">Privacy & Security</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h1>hello settings</h1>
      </div>
    </>
  );
}
export default Settings;
