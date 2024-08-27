import React from "react";
import { Link } from "react-router-dom";
import '../layout/css/style.css';
const FooterPage =()=>{
    return(
        <footer className="footer-section">
      <div className="container relative">

        <div className="sofa-img">
          <img src="/img/images/sofa.png" alt="Sofa" className="img-fluid" />
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src="/img/images/envelope-outline.svg" alt="Envelope" className="img-fluid" />
                </span>
                <span>Subscribe to Newsletter</span>
              </h3>

              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <Link to="/" className="footer-logo">Furni<span>.</span></Link>
            </div>
            <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

            <ul className="list-unstyled custom-social">
              <li><Link to="https://facebook.com"><span className="fa fa-brands fa-facebook-f"></span></Link></li>
              <li><Link to="https://twitter.com"><span className="fa fa-brands fa-twitter"></span></Link></li>
              <li><Link to="https://instagram.com"><span className="fa fa-brands fa-instagram"></span></Link></li>
              <li><Link to="https://linkedin.com"><span className="fa fa-brands fa-linkedin"></span></Link></li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/service">Services</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Contact us</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/">Support</Link></li>
                  <li><Link to="/">Knowledge base</Link></li>
                  <li><Link to="/">Live chat</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/jobs">Jobs</Link></li>
                  <li><Link to="/team">Our team</Link></li>
                  <li><Link to="/leadership">Leadership</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li><Link to="/detail/1">Nordic Chair</Link></li>
                  <li><Link to="/detail/2">Kruzo Aero</Link></li>
                  <li><Link to="/detail/3">Ergonomic Chair</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. &mdash; Designed with love by <Link to="https://untree.co">Untree.co</Link> Distributed By <Link to="https://themewagon.com">ThemeWagon</Link>
                {/* License information: https://untree.co/license/ */}
              </p>
            </div>

            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
    );
};
export default FooterPage;