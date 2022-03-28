import React, { useState, useEffect } from "react";

import axios from "axios";

import "./CourseSection.css";
import { CourseCard } from "../../../../components";

const CourseSection = () => {
  const [poularProductList, setPopularProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");

        // sorting products based on enrolled students
        const sortedProductList = response.data.products.sort(
          (product1, product2) => {
            return product2.enrolledStudents - product1.enrolledStudents;
          }
        );

        // setting initial 5 products
        setPopularProductList(sortedProductList.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-center gutter-bottom-24 section-heading">
        Most popular courses
      </h2>
      <section className="course-wrapper  gutter-bottom-24 ">
        {/* mapping over products and displaying card for each product */}

        {poularProductList.map((product) => (
          <CourseCard key={product._id} product={product} />
        ))}
      </section>
    </>
  );
};

export default CourseSection;
