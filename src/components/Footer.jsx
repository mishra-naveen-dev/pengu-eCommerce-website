import React from "react";
import logo from "../assets/images/logo.svg";
import blog1 from "../assets/images/news/img-01.jpg";
import blog2 from "../assets/images/news/img-02.jpg";

const Footer = () => {
  const blogPosts = [
    {
      img: blog1,
      title: "It is a long established fact that a reader will be distracted.",
      date: "12 December, 2023",
    },
    {
      img: blog2,
      title: "It is a long established fact that a reader will be distracted.",
      date: "15 December, 2023",
    },
  ];

  return (
    <>
      {" "}
      <div className="w-100 bg-white pt-5 pb-4 container-fluid">
        <footer>
          <div className="container">
            <div className="row gy-4">
              {/* Logo & About */}
              <div className="col-md-6 col-lg-3">
                <img src={logo} alt="Logo" height="50" />
                <p className="text-muted mt-3">
                  Mattis inelit neque quis donecyir eleng amet. Amet sed et
                  cursus eu euiod. Egestaerets in morbiet tristique ornare
                  vulputate vitae enim.
                </p>
                <div className="d-flex gap-3 mt-4">
                  {/* Bootstrap Icons */}
                  <a
                    href="#"
                    className="bg-light d-flex justify-content-center align-items-center rounded-circle"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-facebook text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-light d-flex justify-content-center align-items-center rounded-circle"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-twitter text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-light d-flex justify-content-center align-items-center rounded-circle"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-skype text-dark"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-light d-flex justify-content-center align-items-center rounded-circle"
                    style={{ width: 40, height: 40 }}
                  >
                    <i className="bi bi-linkedin text-dark"></i>
                  </a>
                </div>
              </div>

              {/* Categories */}
              <div className="col-md-6 col-lg-2">
                <h6 className="text-dark fw-bold mb-3">Categories</h6>
                <ul className="list-unstyled">
                  {[
                    "Women",
                    "Men",
                    "Kids",
                    "Shoes",
                    "Jewellery",
                    "T-shirts",
                  ].map((item, i) => (
                    <li key={i} className="mb-1">
                      <a href="#" className="text-dark text-decoration-none">
                        • {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blog Post */}
              <div className="col-md-6 col-lg-4">
                <h6 className="text-dark fw-bold mb-3">Blog Post</h6>

                {blogPosts.map((post, index) => (
                  <div className="d-flex mb-3" key={index}>
                    <img
                      src={post.img}
                      alt="Blog"
                      className="me-3 rounded"
                      width="60"
                      height="60"
                    />
                    <div>
                      <p className="mb-1 small text-dark">{post.title}</p>
                      <span className="text-muted small">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="col-md-6 col-lg-3">
                <h6 className="text-dark fw-bold mb-3">Newsletter</h6>
                <p className="text-muted">
                  Subscribe to our newsletter and get 10% off your first
                  purchase.
                </p>
                <form className="mt-2">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Your Email Address.."
                  />
                  <button
                    type="submit"
                    className="btn w-100"
                    style={{ backgroundColor: "#f96666", color: "#fff" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="pt-3 pb-1   w-100" style={{ backgroundColor: "#d9d9d9" }}>
        <p className="text-center text-dark  medium fs-5 ">
          Copyright © 2023 Canun by
          <span className="text-danger fw-semibold">wpOceans</span>. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
