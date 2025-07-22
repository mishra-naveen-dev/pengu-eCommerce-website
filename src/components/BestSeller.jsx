import React from "react";
import img1 from "../assets/images/bestseller/img-1.jpg";
import img2 from "../assets/images/bestseller/img-2.jpg";
import img3 from "../assets/images/bestseller/img-3.jpg";
import img4 from "../assets/images/bestseller/img-4.jpg";

const BestSeller = () => {
  const bestsellerProducts = [
    {
      id: 1,
      image: img1,
      name: "Long Sleeve Tops",
      oldPrice: "850.50",
      presentPrice: "70.30",
    },
    {
      id: 2,
      image: img2,
      name: "White Wedding Shoe",
      oldPrice: "150.50",
      presentPrice: "120.30",
    },
    {
      id: 3,
      image: img3,
      name: "Long Chain With Lockel",
      oldPrice: "85.50",
      presentPrice: "60.30",
    },
    {
      id: 4,
      image: img4,
      name: "Winter Jacket",
      oldPrice: "100.50",
      presentPrice: "80.30",
    },
  ];

  return (
    <section className="pengu-bestseller-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="wpo-section-title">
              <h2>Best Seller</h2>
              <p>Top sale in this week and this season.</p>
            </div>
          </div>
        </div>
        <div className="bestseller-wrap">
          <div className="row">
            {bestsellerProducts.map((product) => (
              <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                <div className="product-single-item">
                  <div className="image">
                    <img src={product.image} alt={product.name} />
                    <div className="card-icon">
                      <a className="icon" href="wishlist.html">
                        <i className="bi bi-heart" aria-hidden="true"></i>
                      </a>
                      <a className="icon-active" href="wishlist.html">
                        <i className="bi bi-heart-fill" aria-hidden="true"></i>
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
    </section>
  );
};

export default BestSeller;
