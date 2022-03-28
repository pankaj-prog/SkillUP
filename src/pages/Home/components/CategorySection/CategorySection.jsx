import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import CategoryCard from "./components/CategoryCard/CategoryCard.jsx";

import "./CategorySection.css";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-center gutter-bottom-24 section-heading">
        Featured Categories
      </h2>
      <section className="categories-wrapper  gutter-bottom-24 ">
        {/* mapping over categories and displaying card for each category */}

        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </section>
    </>
  );
};

export default CategorySection;
