import React from "react";
import { NavLink } from "react-router-dom";
import {
  useFilter,
  initialFilterState,
} from "../../../../context/filterContext";

import "./Hero.css";

const Hero = () => {
  const { filterDispatch } = useFilter;
  return (
    <section className="gutter-bottom-24 hero">
      <div className="content">
        <div className=" hero-subtitle ">FUTURE LEARNING</div>
        <h1 className="hero-heading ">
          Tech skills that go beyond certifications
        </h1>
        <p className="hero-description ">
          Smart learning powered by real support and mentorship.
        </p>

        <NavLink
          onClick={() =>
            filterDispatch({
              type: "clear_filters",
              payload: initialFilterState,
            })
          }
          to="/courses"
          className="btn btn-outline-primary btn-rc link"
        >
          Explore Courses
        </NavLink>
      </div>
      <div className="img-wrapper">
        <img
          className="responsive-img"
          src="https://github.com/pankaj-prog/Ecom-images/blob/main/More/Online%20learning.png?raw=true"
          alt="Girl studying online"
        />
      </div>
    </section>
  );
};

export default Hero;
