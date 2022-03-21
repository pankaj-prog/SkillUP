import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <section className="category-banner text-center gutter-bottom-24">
      <h1 className="category-banner-title gutter-bottom-16">All Courses</h1>
      <div className="content-width">
        <h2 className="categroy-banner-subtitle h1">
          Discover Online Courses and Course Bundles{" "}
        </h2>
        <p className="category-banner-description">
          Buying online courses can be expensive, especially when you need to
          take several courses on the same subject. You could easily pay
          hundreds or thousands of dollars on popular learning platforms for a
          single course. Sometimes those platforms offer discounts, but it’s
          impossible to predict when courses will go on sale. Here, you have
          access to a wide variety of heavily discounted courses—the same
          courses you can find on popular, expensive online learning platforms.
          Our discounts won’t disappear—the discounted price is our regular
          price.
        </p>
      </div>
    </section>
  );
};

export default Banner;
