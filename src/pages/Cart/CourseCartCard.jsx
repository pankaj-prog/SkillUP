import React from "react";
import "./CourseCartCard.css";
import { Link } from "react-router-dom";

const CourseCartCard = ({ product }) => {
  return (
    <article className="course-cart-card">
      <div className="img-wrapper">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="content h4">
        <Link to="/course" className="link">
          {product.title}
        </Link>
      </div>
      <div className="quantity-wrapper">
        <button className="btn icon-btn">+</button>
        <input className="text-center quantity-input" type="number" value={1} />
        <button className="btn icon-btn">-</button>
      </div>
      <div className="price text-center fw-b">₹{product.originalPrice}</div>
      <button className="btn icon-btn remove-button" title="Remove from cart">
        <i class="fas fa-times"></i>
      </button>
    </article>
  );
};

export default CourseCartCard;
