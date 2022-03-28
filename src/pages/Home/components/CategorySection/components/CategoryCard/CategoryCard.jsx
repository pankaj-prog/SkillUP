import React from "react";
import "./CategoryCard.css";
import { useNavigate } from "react-router-dom";
import {
  useFilter,
  initialFilterState,
} from "../../../../../../context/filterContext";

const CategoryCard = ({ category }) => {
  const { categoryName, img } = category;

  const { filterDispatch } = useFilter();

  const navigate = useNavigate();

  // navigate to courses listing page with selected filter
  const clickHandler = () => {
    filterDispatch({ type: "clear_filters", payload: initialFilterState });
    filterDispatch({ type: "category", payload: categoryName.toLowerCase() });
    navigate("/courses");
  };

  return (
    <article onClick={clickHandler} className="card">
      <div className="img-wrapper">
        <img className="responsive-img" src={img} alt={categoryName} />
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
