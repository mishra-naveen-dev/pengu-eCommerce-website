import React from "react";
import lookbookImg from "../assets/images/lookbook.jpg";
import winterImg from "../assets/images/winter.jpg";

const SpacingBanner = () => {
  return (
    <section className="pengu-spacing-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="lookbook-benner">
              <div className="bg-image">
                <img src={lookbookImg} alt="Lookbook 2023" />
              </div>
              <div className="content">
                <h2>LOOKBOOK 2023</h2>
                <p>Best fasionable brand in the world</p>
                <a className="theme-btn" href="shop.html">
                  View Collection
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="winter-benner">
              <div className="bg-image">
                <img src={winterImg} alt="Winter Sale" />
              </div>
              <div className="content">
                <span>Winter Sale</span>
                <h2>UP TO 70% OFF</h2>
                <a className="theme-btn" href="shop.html">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacingBanner;
