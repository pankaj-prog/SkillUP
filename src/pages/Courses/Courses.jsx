import React from "react";

import "./Courses.css";
import { Banner, CoursesContainer, FilterTable } from "./components";

const Courses = () => {
  return (
    <main className="">
      <Banner />
      <section className="main-content content-width">
        <FilterTable />
        <CoursesContainer />
      </section>
    </main>
  );
};

export default Courses;
