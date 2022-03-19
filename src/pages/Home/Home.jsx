import React from "react";

import "./Home.css";

import { CategorySection, Hero, CourseSection } from "./components";

const Home = () => {
  return (
    <div className="content-width">
      <Hero />
      <CategorySection />
      <CourseSection />
    </div>
  );
};

export default Home;
