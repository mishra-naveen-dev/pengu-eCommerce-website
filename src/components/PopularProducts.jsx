import React, { useState } from "react";
import img1 from "../assets/images/product-category/1.jpg";
import img2 from "../assets/images/product-category/2.jpg";
import img3 from "../assets/images/product-category/3.jpg";
import img4 from "../assets/images/product-category/4.jpg";
import img5 from "../assets/images/product-category/5.jpg";
import img6 from "../assets/images/product-category/6.jpg";
import img7 from "../assets/images/product-category/7.jpg";
import img8 from "../assets/images/product-category/8.jpg";

const PopularProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    {
      id: 1,
      image: img1,
      name: "Long Sleeve Tops",
      oldPrice: "85.50",
      presentPrice: "70.30",
      categories: ["all", "women", "sales"],
    },
    {
      id: 2,
      image: img2,
      name: "White Wedding Shoe",
      oldPrice: "150.50",
      presentPrice: "120.30",
      categories: ["all", "women", "men", "offers", "kids"],
    },
    {
      id: 3,
      image: img3,
      name: "Long Chain With Lockel",
      oldPrice: "180.50",
      presentPrice: "150.30",
      categories: ["all", "women", "men", "offers", "kids"],
    },
    {
      id: 4,
      image: img4,
      name: "Winter Jacket",
      oldPrice: "100.50",
      presentPrice: "70.30",
      categories: ["all", "women", "kids"],
    },
    {
      id: 5,
      image: img5,
      name: "Long Sleeve Tops",
      oldPrice: "85.50",
      presentPrice: "70.30",
      categories: ["all", "women", "sales", "kids"],
    },
    {
      id: 6,
      image: img6,
      name: "White Wedding Shoe",
      oldPrice: "120.50",
      presentPrice: "100.30",
      categories: ["all", "men", "offers"],
    },
    {
      id: 7,
      image: img7,
      name: "Long Chain With Lockel",
      oldPrice: "150.50",
      presentPrice: "130.30",
      categories: ["all", "men"],
    },
    {
      id: 8,
      image: img8,
      name: "Winter Jacket",
      oldPrice: "100.50",
      presentPrice: "70.30",
      categories: ["all", "men"],
    },
  ];

  const categories = [
    { key: "all", label: "All Products" },
    { key: "men", label: "Men" },
    { key: "women", label: "Women" },
    { key: "kids", label: "Kids" },
    { key: "sales", label: "Sales" },
    { key: "offers", label: "Offers" },
  ];

  const filteredProducts = products.filter((product) =>
    product.categories.includes(activeFilter)
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="pengu-product-category-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title">
              <h2>Popular Products</h2>
              <p>Here is our new arraival products that you may like.</p>
            </div>
          </div>
        </div>
        <div className="category-wrap">
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-12">
                    <ul className="category-item">
                      {categories.map((category) => (
                        <li key={category.key}>
                          <button
                            type="button"
                            className={`product-btn ${
                              activeFilter === category.key ? "current" : ""
                            }`}
                            onClick={() => handleFilterChange(category.key)}
                          >
                            {category.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gallery-container gallery-fancybox masonry-gallery row">
                {filteredProducts.map((product) => (
                  <div
                    className="col-lg-3 col-md-6 col-12 custom-grid"
                    key={product.id}
                  >
                    <div className="product-single-item">
                      <div className="image">
                        <img src={product.image} alt={product.name} />
                        <div className="card-icon">
                          <a className="icon" href="wishlist.html">
                            <i className="bi bi-heart" aria-hidden="true"></i>
                          </a>
                          <a className="icon-active" href="wishlist.html">
                            <i
                              className="bi bi-heart-fill"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                        <ul className="cart-wrap">
                          <li>
                            <a
                              href="cart.html"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title=""
                              data-bs-original-title="Add To Cart"
                              aria-label="Add To Cart"
                            >
                              <i className="bi bi-cart-plus"></i>
                            </a>
                          </li>
                          <li
                            data-bs-toggle="modal"
                            data-bs-target="#popup-quickview"
                          >
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title=""
                              data-bs-original-title="Quick View"
                              aria-label="Quick View"
                            >
                              <i className="bi bi-eye"></i>
                            </button>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title=""
                              data-bs-original-title="Compare"
                              aria-label="Compare"
                            >
                              <i
                                className="bi bi-arrows-angle-contract"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                        <div className="shop-btn">
                          <a className="product-btn" href="shop.html">
                            Shop Now
                          </a>
                        </div>
                      </div>
                      <div className="text">
                        <h2>
                          <a href="product-single.html">{product.name}</a>
                        </h2>
                        <div className="price">
                          <del className="old-price">${product.oldPrice}</del>
                          <span className="present-price">
                            ${product.presentPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
