import React, { useEffect, useReducer, useState } from "react";

import axios from "axios";

import "./Courses.css";
import { Banner, CoursesContainer, FilterTable } from "./components";
import { filterReducer } from "./utils/filterReducer";
import { getFilteredData } from "./utils/getFilteredData";

const initialFilterState = {
  minRating: 1,
  minPrice: 0,
  sortType: "",
  category: [],
};

const Courses = () => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        setProductList(response.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const newProductList = getFilteredData(filterState, productList);

  return (
    <main className="gutter-bottom-16">
      <Banner />
      <section className="main-content content-width">
        <FilterTable dispatch={dispatch} />
        <CoursesContainer productList={newProductList} />
      </section>
    </main>
  );
};

export default Courses;
