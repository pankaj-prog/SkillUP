import React, { useEffect, useState } from "react";

import "./Navbar.css";

import { useNavigate, NavLink } from "react-router-dom";
import { useFilter, initialFilterState } from "../../context/filterContext";
import { useAuth, useCart, useWishlist } from "../../context/";

import { cartTotalQuantity } from "../../pages/Cart/components/CartBill/cartBillUtils";

const Navbar = () => {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  const { setUser, encodedToken, setEncodedToken } = useAuth();
  const { cartProducts, setCartProducts } = useCart();
  const { wishlistProducts, setWishlistProducts } = useWishlist();

  const signOutHandler = () => {
    setEncodedToken(null);
    setUser(null);
    setWishlistProducts([]);
    setCartProducts([]);
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
  };

  const searchHandler = (e) => {
    console.log(e.target.value);
    if (e.key == "Enter") {
      filterDispatch({
        type: "search",
        payload: e.target.value,
      });
      navigate("/courses");
    }
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
          <input
            placeholder="Search from all products."
            type="text"
            id="search"
            onKeyUp={searchHandler}
          />
        </div>
        <div id="header-ctas" className="header-ctas">
          <NavLink
            to="/wishlist"
            className="btn icon-btn link badge-container icon-container"
          >
            <i className="fas fa-heart"></i>
            {encodedToken && (
              <span className="badge">{wishlistProducts.length}</span>
            )}
          </NavLink>
          <NavLink
            to="/cart"
            className="btn icon-btn link badge-container icon-container"
          >
            <i className="fas fa-shopping-cart "></i>
            {encodedToken && (
              <span className="badge">{cartTotalQuantity(cartProducts)}</span>
            )}
          </NavLink>
          {encodedToken ? (
            <div className="user-wrapper">
              <button className="btn icon-btn" id="user-wrapper">
                <i className="fas fa-user"></i>
              </button>
              <div className="popup">
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
