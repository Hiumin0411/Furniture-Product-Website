import React from "react";
import { Link } from "react-router-dom";
import '../layout/css/style.css';
const ServicePage =() =>{
    return(
        <body style={{ backgroundColor: '#EFF2F1' }} >
              <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                 Services{' '}
                  <span clsas="d-block">
                   
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
      {/* <!-- Start Why Choose Us Section --> */}
<div className="why-choose-section">
  <div className="container">
    <div className="row my-5">
      {/* Start Feature */}
      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/truck.svg" alt="Fast & Free Shipping" className="img-fluid" />
          </div>
          <h3>Fast &amp; Free Shipping</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>
      {/* End Feature */}

      {/* Start Feature */}
      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/bag.svg" alt="Easy to Shop" className="img-fluid" />
          </div>
          <h3>Easy to Shop</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>
      {/* End Feature */}

      {/* Start Feature */}
      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/support.svg" alt="24/7 Support" className="img-fluid" />
          </div>
          <h3>24/7 Support</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>
      {/* End Feature */}

      {/* Start Feature */}
      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/return.svg" alt="Hassle Free Returns" className="img-fluid" />
          </div>
          <h3>Hassle Free Returns</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>
      {/* End Feature */}

      {/* Duplicate Features */}
      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/truck.svg" alt="Fast & Free Shipping" className="img-fluid" />
          </div>
          <h3>Fast &amp; Free Shipping</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>

      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/bag.svg" alt="Easy to Shop" className="img-fluid" />
          </div>
          <h3>Easy to Shop</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>

      <div className="col-6 col-md-6 col-lg-3 mb-4">
        <div className="feature">
          <div className="icon">
            <img src="/img/images/support.svg" alt="24/7 Support" className="img-fluid" />
          </div>
          <h3>24/7 Support</h3>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
        </div>
      </div>

      <div className="col-6 col-md-6 col-lg-3 mb-4">
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
</div>
{/* <!-- End Why Choose Us Section --> */}

{/* <!-- Start Product Section --> */}
<div className="product-section pt-0">
  <div className="container">
    <div className="row">
      {/* Start Column 1 */}
      <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <p><a href="/" className="btn">Explore</a></p>
      </div>
      {/* End Column 1 */}

      {/* Start Column 2 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="/">
          <img src="/img/images/product-1.png" className="img-fluid product-thumbnail" alt="Nordic Chair" />
          <h3 className="product-title">Nordic Chair</h3>
          <strong className="product-price">$50.00</strong>
          <span className="icon-cross">
            <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
          </span>
        </a>
      </div>
      {/* End Column 2 */}

      {/* Start Column 3 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="/">
          <img src="/img/images/product-2.png" className="img-fluid product-thumbnail" alt="Kruzo Aero Chair" />
          <h3 className="product-title">Kruzo Aero Chair</h3>
          <strong className="product-price">$78.00</strong>
          <span className="icon-cross">
            <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
          </span>
        </a>
      </div>
      {/* End Column 3 */}

      {/* Start Column 4 */}
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <a className="product-item" href="/">
          <img src="/img/images/product-3.png" className="img-fluid product-thumbnail" alt="Ergonomic Chair" />
          <h3 className="product-title">Ergonomic Chair</h3>
          <strong className="product-price">$43.00</strong>
          <span className="icon-cross">
            <img src="/img/images/cross.svg" className="img-fluid" alt="cross icon" />
          </span>
        </a>
      </div>
      {/* End Column 4 */}
    </div>
  </div>
</div>
{/* <!-- End Product Section --> */}

        </body>
      
    );
};
export default ServicePage;