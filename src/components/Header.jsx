import React from "react";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <>
      <header className="bg-white  py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo" height="60" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center customNavbar"
              id="navbarContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center gap-4">
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold fs-5 text-uppercase nav-link-custom"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 text-uppercase nav-link-custom"
                    href="/shop"
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 text-uppercase nav-link-custom"
                    href="/pages"
                  >
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 text-uppercase nav-link-custom"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-5 text-uppercase nav-link-custom"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn btn-light rounded-circle">
              <i className="bi bi-search fs-5"></i>
            </div>
            <div className="btn btn-light rounded-circle">
              <i className="bi bi-cart fs-5"></i>
            </div>
            <div className="btn btn-light rounded-circle">
              <i className="bi bi-person fs-5"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
