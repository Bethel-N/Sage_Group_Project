import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import LogoutButton from "./LogoutButton";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-store"></i> Tillet Traditional Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="fas fa-th-large"></i> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </li>
            <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
