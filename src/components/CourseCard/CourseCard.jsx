import React from "react";
import { useNavigate } from "react-router-dom";

import "./CourseCard.css";

const CourseCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/courses`)} className="course-card">
      <div className="img-wrapper">
        <img src={product.img} alt="" className="responsive-img" />
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
    </div>
  );
};

export default CourseCard;