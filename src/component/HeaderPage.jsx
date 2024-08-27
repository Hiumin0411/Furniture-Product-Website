import React from "react";
import { Link } from "react-router-dom";
import '../layout/css/style.css';
// import '../App.css';
import CartIcon from "./CartIcon";

const HeaderPage =() =>{
    return(
        <header>
            <nav  arial-label="Furni navigation bar"
  className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
>
  <div className="container">
    <Link
      className="navbar-brand"
      to="/"
    >
      ZenIxFurni
      <span>
        .
      </span>
    </Link>
    <button
      aria-controls="navbarsFurni"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarsFurni"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarsFurni"
    >
      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        {/* <Link className="nav-link" to="/shop">
  Shop
</Link> */}
        </li>
        <li>
          <Link
            className="nav-link"
            to="/about"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/service"
          >
            Services
          </Link>
        </li>
        <li>
          <a
            className="nav-link"
            href="blog.html"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="contact.html"
          >
            Contact us
          </a>
        </li>
      </ul>
      <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
        <li>
            
          <Link className="nav-link" to="/user">
          <img src="/img/images/user.svg" alt="User icon" />
          </Link>
          
        </li>
        <li>
          {/* <Link
            className="nav-link"
            to="/cart"
          >
            <img src="/img/images/cart.svg" alt="Cart icon"/>
          </Link> */}
          <CartIcon/>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </header>
    );
};
export default HeaderPage;