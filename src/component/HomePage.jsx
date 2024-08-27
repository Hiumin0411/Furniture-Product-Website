import React from "react";
import '../layout/css/style.css';
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import PoppularProducts from "./PoppularProducts";
import FeaturedCategories from "./FeaturedCategories copy";
// import { Feather } from 'react-feather';
import '../css/Homepage.css';
const HomePage =() =>{
    return(
        <body style={{ backgroundColor: '#EFF2F1' }} >
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
              Modern Interior{' '}
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
                to="/"
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
 
  <div className="container">
  <FeaturedCategories/>
    </div>

          <div className="product-section">
      <div className="container">
        <div className="row">

          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <Link to="shop" className="btn">Explore</Link>
            </p>
          </div> 
          {/* End Column 1 */}

         <FeaturedProducts/>

        </div>
      </div>
          </div>
          <div className="product-section">
      <div className="container">
        <div className="row">

          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <Link to="shop" className="btn">Explore</Link>
            </p>
          </div> 
          {/* End Column 1 */}

         <FeaturedProducts/>

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
          <Link href="/" className="btn">
            Explore
          </Link>
        </p>
      </div>
    </div>
  </div>
        </div>

        <div className="popular-product">
  <div className="container">
    <div className="row">

      {/* <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="/img/images/product-1.png" alt="Nordic Chair" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Nordic Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><Link href="/">Read More</Link></p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="/img/images/product-2.png" alt="Kruzo Aero Chair" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Kruzo Aero Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><Link href="/">Read More</Link></p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
        <div className="product-item-sm d-flex">
          <div className="thumbnail">
            <img src="/img/images/product-3.png" alt="Ergonomic Chair" className="img-fluid" />
          </div>
          <div className="pt-3">
            <h3>Ergonomic Chair</h3>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
            <p><Link href="/">Read More</Link></p>
          </div>
        </div>
      </div> */}
      <PoppularProducts/>

    </div>
  </div>
        </div>

        <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">

              <div id="testimonial-nav">
                <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
              </div>

              <div className="testimonial-slider">
                
                <div className="item">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mx-auto">

                      <div className="testimonial-block text-center">
                        <blockquote className="mb-5">
                          <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                        </blockquote>

                        <div className="author-info">
                          <div className="author-pic">
                            <img src="/img/images/person-1.png" alt="Maria Jones" className="img-fluid" />
                          </div>
                          <h3 className="font-weight-bold">Maria Jones</h3>
                          <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div> 
                {/* END item */}


              </div>

            </div>
          </div>
        </div>
      </div>
        </div> 

        <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <Link href="/blog" className="more">View All Posts</Link>
          </div>
        </div>

        <div className="row">

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/blog/first-time-home-owner-ideas" className="post-thumbnail">
                <img src="/img/images/post-1.jpg" alt="First Time Home Owner Ideas" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3><Link href="/blog/first-time-home-owner-ideas">First Time Home Owner Ideas</Link></h3>
                <div className="meta">
                  <span>by <Link href="/author/kristin-watson">Kristin Watson</Link></span> <span>on <Link href="/blog/first-time-home-owner-ideas#date">Dec 19, 2021</Link></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/blog/how-to-keep-your-furniture-clean" className="post-thumbnail">
                <img src="/img/images/post-2.jpg" alt="How To Keep Your Furniture Clean" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3><Link href="/blog/how-to-keep-your-furniture-clean">How To Keep Your Furniture Clean</Link></h3>
                <div className="meta">
                  <span>by <Link href="/author/robert-fox">Robert Fox</Link></span> <span>on <Link href="/blog/how-to-keep-your-furniture-clean#date">Dec 15, 2021</Link></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <Link href="/blog/small-space-furniture-apartment-ideas" className="post-thumbnail">
                <img src="/img/images/post-3.jpg" alt="Small Space Furniture Apartment Ideas" className="img-fluid" />
              </Link>
              <div className="post-content-entry">
                <h3><Link href="/blog/small-space-furniture-apartment-ideas">Small Space Furniture Apartment Ideas</Link></h3>
                <div className="meta">
                  <span>by <Link href="/author/kristin-watson">Kristin Watson</Link></span> <span>on <Link href="/blog/small-space-furniture-apartment-ideas#date">Dec 12, 2021</Link></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </div>

    
        </body>
       
    );
};
export default HomePage;