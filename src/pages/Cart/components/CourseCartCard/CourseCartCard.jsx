import React, { useState } from "react";
import "./CourseCartCard.css";
import { Link } from "react-router-dom";

import { useAlert, useAuth, useCart, useWishlist } from "../../../../context";

const CourseCartCard = ({ product }) => {
  const { cartHandlers, setCartProducts } = useCart();
  const { wishlistHandlers, setWishlistProducts } = useWishlist();
  const { encodedToken } = useAuth();
  const { setAlertList } = useAlert();

  const moveToWishlistHandler = () => {
    cartHandlers.removeFromCart(
      product,
      encodedToken,
      setCartProducts,
      setAlertList
    );
    wishlistHandlers.addToWishlist(product, encodedToken, setWishlistProducts);
  };

  return (
    <article className="course-cart-card">
      <div className="img-wrapper">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="content h4">
        <Link to={`/course/${product._id}`} className="link">
          {product.title}
        </Link>
      </div>
      <div className="quantity-wrapper">
        <button
          className="btn icon-btn"
          onClick={() =>
            cartHandlers.productQuantityHandler(
              product,
              encodedToken,
              setCartProducts,
              setAlertList,
              "increment"
            )
          }
        >
          +
        </button>
        <input
          className="text-center quantity-input"
          type="number"
          value={product.qty}
          readOnly
        />
        <button
          className="btn icon-btn"
          onClick={() =>
            cartHandlers.productQuantityHandler(
              product,
              encodedToken,
              setCartProducts,
              setAlertList,
              "decrement"
            )
          }
        >
          -
        </button>
      </div>
      <div className="price text-center fw-b">₹{product.originalPrice}</div>
      <button
        className="btn btn-outline-primary wishlist-btn"
        onClick={moveToWishlistHandler}
      >
        Move to wishlist
      </button>

      <div className="remove-btn">
        <button
          className="btn icon-btn"
          title="Remove from cart"
          onClick={() =>
            cartHandlers.removeFromCart(
              product,
              encodedToken,
              setCartProducts,
              setAlertList
            )
          }
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default CourseCartCard;
