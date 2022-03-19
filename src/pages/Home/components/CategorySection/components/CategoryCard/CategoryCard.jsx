import React from "react";
import "./CategoryCard.css";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { categoryName, img } = category;

  return (
    <article className="card">
      <div className="img-wrapper">
        <img
          className="responsive-img"
          src={img}
          alt={categoryName + "image"}
        />
      </div>
      <div className="card-details text-center">
        <h1 className="card-title">{categoryName}</h1>
        <div className="card-buttons">
          <button className="btn btn-link-primary">View Courses {" >"}</button>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
