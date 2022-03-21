import React from "react";

import { products } from "../../../../data/products";

import { CourseCard } from "../../../../components";
import "./CoursesContainer.css";

const CoursesContainer = () => {
  console.log("products: ", products);
  return (
    <main className="courses-container">
      {products.map((product) => (
        <CourseCard key={product._id} product={product} />
      ))}
    </main>
  );
};

export default CoursesContainer;
