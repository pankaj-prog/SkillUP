import React from "react";
import { Link } from "react-router-dom";

import "./CourseWishlistCard.css";

const CourseWishlistCard = ({ product }) => {
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
      <button className="btn btn-solid-primary add-to-cart-btn">
        Add to cart
      </button>
      <div className="remove-btn">
        <button className="btn icon-btn ">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default CourseWishlistCard;
