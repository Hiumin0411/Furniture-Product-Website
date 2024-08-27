import React from "react";
import { Link } from "react-router-dom";
import '../layout/css/style.css';
const AboutPage =() =>{
    return(
        <body style={{ backgroundColor: '#EFF2F1' }} >
              <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
             Về chúng tôi{' '}
              <span clsas="d-block">
                Design Studio
              </span>
            </h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
            <Link className="btn btn-secondary me-2" to="/shop">
  Shop now
</Link>

              <Link
                className="btn btn-white-outline"
                href="/"
              >
                Explore
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img
              className="img-fluid"
              src="/img/images/couch.png"
              alt="Couch icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
        <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/img/images/truck.svg" alt="Fast & Free Shipping" className="img-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/img/images/bag.svg" alt="Easy to Shop" className="img-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/img/images/support.svg" alt="24/7 Support" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src="/img/images/return.svg" alt="Hassle Free Returns" className="img-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src="/img/images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
        </div>
    
        <div className="we-help-section">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="imgs-grid">
          <div className="grid grid-1">
            <img src="/img/images/img-grid-1.jpg" alt="Untree.co" />
          </div>
          <div className="grid grid-2">
            <img src="/img/images/img-grid-2.jpg" alt="Untree.co" />
          </div>
          <div className="grid grid-3">
            <img src="/img/images/img-grid-3.jpg" alt="Untree.co" />
          </div>
        </div>
      </div>
      <div className="col-lg-5 ps-lg-5">
        <h2 className="section-title mb-4">
          We Help You Make Modern Interior Design
        </h2>
        <p>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada
        </p>

        <ul className="list-unstyled custom-list my-4">
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
        <p>
          <Link to="/" className="btn">
            Explore
          </Link>
        </p>
      </div>
    </div>
  </div>
        </div>      

        </body>

    );
};
export default AboutPage;