import React from "react";

import { CourseCard } from "../../../../components";
import "./CoursesContainer.css";

const CoursesContainer = ({ productList }) => {
  return (
    <main className="courses-container">
      {productList.map((product) => (
        <CourseCard key={product._id} product={product} />
      ))}
    </main>
  );
};

export default CoursesContainer;
