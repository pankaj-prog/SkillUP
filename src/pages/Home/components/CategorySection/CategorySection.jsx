import React from "react";
import { v4 as uuid } from "uuid";
import CategoryCard from "./components/CategoryCard/CategoryCard.jsx";

import "./CategorySection.css";

const categories = [
  {
    _id: uuid(),
    categoryName: "Business",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Business.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Marketing",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Marketing.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Design",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/Design.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Development",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/development.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "IT & Security",
    img: "https://github.com/pankaj-prog/Ecom-images/blob/main/Categories/IT.jpg?raw=true",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
];

const CategorySection = () => {
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
