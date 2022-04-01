import React, { useEffect, useState } from "react";

import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { useFilter, initialFilterState } from "../../context/filterContext";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { filterDispatch } = useFilter();

  const { setUser, encodedToken, setEncodedToken } = useAuth();

  const signOutHandler = () => {
    setEncodedToken(null);
    setUser(null);
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
  };

  return (
    <div className=" header-wrapper gutter-bottom-32 ">
      <header className="header content-width">
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
              <NavLink
                onClick={() =>
                  filterDispatch({
                    type: "clear_filters",
                    payload: initialFilterState,
                  })
                }
                to="/courses"
                className="link"
              >
                Courses
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-search-wrapper">
          <label htmlFor="search">
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
          {encodedToken ? (
            <div className="user-wrapper">
              <button className="btn icon-btn" id="user-wrapper">
                <i className="fas fa-user"></i>
              </button>
              <div className="popup">
                <button className="btn btn-link-primary">View Profile</button>
                <button
                  onClick={() => signOutHandler()}
                  className="btn btn-solid-primary btn-rc"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/signin" className="link">
              <button className="btn btn-solid-primary btn-rc">Sign in</button>
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
