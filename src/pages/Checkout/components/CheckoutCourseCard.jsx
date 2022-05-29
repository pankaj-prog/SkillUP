import React from "react";

const CheckoutCourseCard = ({ product }) => {
  return (
    <article className="checkout-course-card gutter-bottom-8">
      <div className="img-wrapper">
        <img className="responsive-img" src={product.img} alt={product.title} />
      </div>
      <div className="content">
        <h4 className="title">{product.title}</h4>
        <div>
          <p className="text-muted">
            Quantity : <span className="fw-b">{product.qty}</span>
          </p>
          <p className="text-muted">
            Price : <span className="fw-b">{product.originalPrice}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CheckoutCourseCard;
