import React from "react";
import { Link } from "react-router-dom";

import "./CourseWishlistCard.css";
import { useAlert, useAuth, useCart, useWishlist } from "../../context";

const CourseWishlistCard = ({ product }) => {
  const { cartHandlers, cartProducts, setCartProducts } = useCart();
  const { wishlistHandlers, setWishlistProducts } = useWishlist();
  const { encodedToken } = useAuth();
  const { setAlertList } = useAlert();

  const addToCartHandler = () => {
    if (cartHandlers.isProductInCart(product, cartProducts)) {
      return cartHandlers.productQuantityHandler(
        product,
        encodedToken,
        setCartProducts,
        "increment"
      );
    } else {
      cartHandlers.addToCart(
        product,
        encodedToken,
        setCartProducts,
        setAlertList
      );
    }
  };

  const removeFromWishlistHandler = () => {
    wishlistHandlers.removeFromWishlist(
      product,
      encodedToken,
      setWishlistProducts,
      setAlertList
    );
  };

  return (
    <article className="course-wishlist-card">
      <div className="img-wrapper">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="content h4">
        <Link to="/course" className="link">
          {product.title}
        </Link>
      </div>
      <div className="fw-b price">₹{product.originalPrice}</div>
      <button
        className="btn btn-solid-primary add-to-cart-btn"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
      <div className="remove-btn">
        <button className="btn icon-btn " onClick={removeFromWishlistHandler}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default CourseWishlistCard;
