import React from "react";

import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <NavLink to="/" className="header-brand h2 link">
          Skill UP
        </NavLink>
        <nav id="header-nav" className="header-nav">
          <ul>
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="link">
                Courses
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-search-wrapper">
          <label for="search">
            <i className="fas fa-search"></i>
          </label>
          <input type="text" id="search" />
        </div>
        <div id="header-ctas" className="header-ctas">
          <NavLink to="/wishlist" className="btn icon-btn link">
            <i className="far fa-heart"></i>
          </NavLink>
          <NavLink to="/cart" className="btn icon-btn link">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
          <NavLink to="/signin" className="link">
            <button className="btn btn-solid-primary btn-rc">Sign-in</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
