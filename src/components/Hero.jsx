import React from "react";
import slider1 from "../assets/images/slider/8.png";
import "./Hero.css";

const Hero = () => {
  const slide = {
    title: "Sneakers For Men",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, vel, facilisis purus, turpis tincidunt vel. Aliquet egestas in nibh mattis.",
    price: "$50.60",
    discount: "40% Off",
    image: slider1,
  };

  return (
    <section
      className="hero hero-style-4 position-relative overflow-hidden d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold display-2 text-dark mb-3">{slide.title}</h2>
            <p className="text-muted fs-5 mb-4">{slide.subtitle}</p>

            <div className="row g-3 mb-2">
              <div className="col-12 col-md-4">
                <strong className="fs-6">Price :</strong>
              </div>
              <div className="col-12 col-md-4">
                <strong className="fs-6">Color :</strong>
              </div>
              <div className="col-12 col-md-4">
                <strong className="fs-6">Size :</strong>
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-12 col-md-4">
                <span className="fs-5 fw-bold">{slide.price}</span>
              </div>

              <div className="col-12 col-md-4 d-flex align-items-center">
                {["#eeeeee", "#cccccc", "#e3b9d5", "#cce4f0"].map(
                  (color, i) => (
                    <span
                      key={i}
                      className="color-dot me-2"
                      style={{ backgroundColor: color }}
                    ></span>
                  )
                )}
              </div>

              <div className="col-12 col-md-4 d-flex align-items-center flex-wrap">
                {[9, 10, 11, 12, 13].map((size) => (
                  <label key={size} className="me-2 mb-1">
                    <input
                      type="radio"
                      name="size"
                      className="btn-check"
                      id={`size-${size}`}
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      htmlFor={`size-${size}`}
                    >
                      {size}
                    </label>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <a href="/shop" className="btn btn-outline-dark btn-lg me-3">
                {slide.discount}
              </a>
              <a href="/shop" className="btn btn-danger btn-lg">
                Shop Now
              </a>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="hero-image-container position-relative">
              <div
                className="image-circle position-relative d-flex align-items-center justify-content-center"
                style={{
                  width: "500px",
                  height: "500px",
                  background:
                    "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
                  borderRadius: "50%",
                  boxShadow: "0 20px 40px rgba(255, 154, 158, 0.3)",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="img-fluid position-relative"
                  style={{
                    maxWidth: "85%",
                    height: "auto",
                    zIndex: "2",
                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: "-50px",
                    right: "-50px",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    zIndex: "1",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
