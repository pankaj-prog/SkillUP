import React, { useState } from "react";
import "./CourseCartCard.css";
import { Link } from "react-router-dom";

import { useAuth, useCart } from "../../../../context";

const CourseCartCard = ({ product }) => {
  const { cartHandlers, setCartProducts } = useCart();
  const { encodedToken } = useAuth();

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
              "decrement"
            )
          }
        >
          -
        </button>
      </div>
      <div className="price text-center fw-b">₹{product.originalPrice}</div>
      <div className="remove-btn">
        <button
          className="btn icon-btn"
          title="Remove from cart"
          onClick={() =>
            cartHandlers.removeFromCart(product, encodedToken, setCartProducts)
          }
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default CourseCartCard;
