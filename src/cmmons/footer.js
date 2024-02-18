import React from "react";
import { Input, initMDB } from "mdb-ui-kit";

function Footer() {
  initMDB({ Input });

  return (
    <>
      <footer className="bg-white text-black py-5">
        <div className="container">
        <section className="mb-4   p-3 rounded">
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f " ></i>
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-twitter" style={{ color: '#00acee' }}></i>
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google" style={{ color: '#db4a39' }}></i>
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram" style={{ color: '#125688' }}></i>
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-linkedin-in" style={{ color: '#007bb5' }}></i>
            </a>
            <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
              <i className="fab fa-github" style={{ color: '#333' }}></i>
            </a>
          </section>

          <section className="mb-4">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Subscribe to our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example24">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-outline mb-4"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-black" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="text-black" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="text-black" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="text-black" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>

              {/* Repeat the above grid column structure for additional sections if needed */}
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 255, 0.05)" }}
        >
          © 2022 Your Company. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
