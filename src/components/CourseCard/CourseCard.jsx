import React from "react";
import { useNavigate } from "react-router-dom";

import "./CourseCard.css";

const CourseCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/course/${product._id}`)}
      className="course-card badge-container"
    >
      <div className="img-wrapper">
        <img src={product.img} alt={product.title} className="responsive-img" />
      </div>
      <div className="content">
        <h4>{product.title}</h4>
        <div className="price">
          <span className="discounted-price">
            Rs. {product.discountedPrice}
          </span>
          {" || "}
          <span className="original-price">Rs. {product.originalPrice}</span>
        </div>
      </div>
      <span class="card-badge"> {product.rating} </span>
    </div>
  );
};

export default CourseCard;
