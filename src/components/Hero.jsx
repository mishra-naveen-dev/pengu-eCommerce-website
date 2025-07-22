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
      className="hero-section"
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hero-content">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#666",
                  marginBottom: "40px",
                  lineHeight: "1.6",
                }}
              >
                {slide.subtitle}
              </p>

              {/* Product Options */}
              <div style={{ marginBottom: "40px" }}>
                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      minWidth: "80px",
                    }}
                  >
                    Price :
                  </span>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#333",
                    }}
                  >
                    {slide.price}
                  </span>
                </div>

                {/* Colors */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      minWidth: "80px",
                    }}
                  >
                    Color :
                  </span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {["#eeeeee", "#cccccc", "#e3b9d5", "#cce4f0"].map(
                      (color, i) => (
                        <div
                          key={i}
                          style={{
                            width: "25px",
                            height: "25px",
                            backgroundColor: color,
                            borderRadius: "50%",
                            border: "2px solid #ddd",
                            cursor: "pointer",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Sizes */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      minWidth: "80px",
                    }}
                  >
                    Size :
                  </span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {[9, 10, 11, 12, 13].map((size) => (
                      <button
                        key={size}
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "2px solid #ddd",
                          backgroundColor: "#fff",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "20px" }}>
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#fff",
                    color: "#666",
                    border: "2px solid #ddd",
                    borderRadius: "50px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {slide.discount}
                </button>
                <button
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#ff6b6b",
                    color: "#fff",
                    border: "2px solid #ff6b6b",
                    borderRadius: "50px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  border: "5px solid #ff6b6b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
