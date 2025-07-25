import React from "react";
import img1 from "../assets/images/product-single/1.jpg";
import img2 from "../assets/images/product-single/2.jpg";
import img3 from "../assets/images/product-single/3.jpg";
import img4 from "../assets/images/product-single/4.jpg";

const NewArrivalProducts = () => {
  const products = [
    {
      id: 1,
      image: img1,
      name: "Long Sleeve Tops",
      oldPrice: "85.50",
      presentPrice: "70.30",
      isActive: false,
    },
    {
      id: 2,
      image: img2,
      name: "White Wedding Shoe",
      oldPrice: "150.20",
      presentPrice: "120.50",
      isActive: true,
    },
    {
      id: 3,
      image: img3,
      name: "Long Chain With Lockel",
      oldPrice: "85.50",
      presentPrice: "70.30",
      isActive: false,
    },
    {
      id: 4,
      image: img4,
      name: "Winter Jacket",
      oldPrice: "100.50",
      presentPrice: "80.30",
      isActive: false,
    },
  ];

  return (
    <section className="pengu-product-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title">
              <h2>New Arraival</h2>
              <p>Here is our new arraival products that you may like.</p>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="row">
            {products.map((product) => (
              <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                <div
                  className={`product-single-item ${
                    product.isActive ? "" : ""
                  }`}
                >
                  <div className="image">
                    <img src={product.image} alt="" />
                    <div className="card-icon">
                      <a className="icon" href="wishlist.html">
                        <i className="bi bi-heart" aria-hidden="true"></i>
                      </a>
                      {product.id === 2 ? (
                        <a
                          className="icon-active"
                          href="wishlist.html"
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title=""
                          data-bs-original-title="Add To Wishlist"
                        >
                          <i
                            className="bi bi-heart-fill"
                            aria-hidden="true"
                          ></i>
                        </a>
                      ) : (
                        <a className="icon-active" href="wishlist.html">
                          <i
                            className="bi bi-heart-fill"
                            aria-hidden="true"
                          ></i>
                        </a>
                      )}
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
    </section>
  );
};

export default NewArrivalProducts;
