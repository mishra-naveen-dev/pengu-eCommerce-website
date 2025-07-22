import React, { useState } from "react";
import slider8 from "../assets/images/slider/8.png";


const HeroSlider = () => {
  const [selectedColor, setSelectedColor] = useState("color1");
  const [selectedSize, setSelectedSize] = useState(9);

  const productData = {
    id: 1,
    title: "Sneakers For Men",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, vel, facilisis purus, turpis tincidunt vel. Aliquet egestas in nibh mattis.",
    price: "$50.60",
    discount: "40% Off",
    image: slider8,
    colors: [
      { name: "color1", color: "#E5E7EB" },
      { name: "color2", color: "#F8BBD9" },
      { name: "color3", color: "#BFDBFE" },
      { name: "color4", color: "#A7F3D0" },
    ],
    sizes: [9, 10, 11, 12, 13],
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <section className="hero hero-style-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-7">
            <div className="hero-content">
              <div className="slide-title">
                <h1>{productData.title}</h1>
              </div>
              <div className="slide-subtitle">
                <p>{productData.description}</p>
              </div>

              <div className="product-options">
                {/* Row 1: Price, Color, Size */}
                <div className="option-row">
                  {/* Price */}
                  <div className="option-group">
                    <span className="option-label">Price :</span>
                    <span className="price-value">{productData.price}</span>
                  </div>

                  {/* Color */}
                  <div className="option-group">
                    <span className="option-label">Color :</span>
                    <div className="color-options">
                      {productData.colors.map((colorObj, index) => (
                        <label key={index} className="color-option">
                          <input
                            type="radio"
                            name="color"
                            value={colorObj.name}
                            checked={selectedColor === colorObj.name}
                            onChange={() => handleColorChange(colorObj.name)}
                          />
                          <span
                            className="color-circle"
                            style={{ backgroundColor: colorObj.color }}
                          ></span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div className="option-group">
                    <span className="option-label">Size :</span>
                    <div className="size-options">
                      {productData.sizes.map((size, index) => (
                        <label key={index} className="size-option">
                          <input
                            type="radio"
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={() => handleSizeChange(size)}
                          />
                          <span className="size-button">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-buttons">
                <button className="btn-discount">{productData.discount}</button>
                <button className="btn-shop">Shop Now</button>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-lg-6 col-md-5">
            <div className="hero-image">
              <div className="image-circle">
                <img src={productData.image} alt={productData.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
