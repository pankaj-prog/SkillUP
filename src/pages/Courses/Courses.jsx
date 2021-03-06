import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Courses.css";

import { Banner, CoursesContainer, FilterTable } from "./components";
import { useFilter, initialFilterState } from "../../context/filterContext";
import { getFilteredData } from "./utils/getFilteredData";

const Courses = () => {
  const [productList, setProductList] = useState([]);

  const { filterDispatch, filterState } = useFilter();

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

  console.log(filterState);

  const newProductList = getFilteredData(filterState, productList);

  return (
    <main className="gutter-bottom-16">
      <Banner />
      <section className="main-content content-width">
        <FilterTable
          filterDispatch={filterDispatch}
          filterState={filterState}
          initialFilterState={initialFilterState}
        />
        <CoursesContainer productList={newProductList} />
      </section>
    </main>
  );
};

export default Courses;
