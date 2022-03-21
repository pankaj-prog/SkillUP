import React from "react";
import FilterInput from "./FilterInput";

import "./FilterTable.css";

const filterData = [
  {
    heading: "Category",
    name: "category",
    inputType: "checkbox",
    filterType: [
      {
        id: "marketing",
        label: "Marketing",
      },
      {
        id: "finance",
        label: "Finance",
      },
      {
        id: "technology",
        label: "Technology",
      },
    ],
  },
  {
    heading: "Ratings",
    name: "rating",
    inputType: "radio",
    filterType: [
      {
        id: "four-and-above",
        label: "4 stars and above",
      },
      {
        id: "three-and-above",
        label: "3 stars and above",
      },
      {
        id: "two-and-above",
        label: "2 stars and above",
      },
    ],
  },
  {
    heading: "Sort By",
    name: "sort",
    inputType: "radio",
    filterType: [
      {
        id: "high-to-low",
        label: "Price - high to low ",
      },
      {
        id: "low-to-high",
        label: "Price - low to high",
      },
    ],
  },
];

const FilterTable = () => {
  return (
    <aside className="filter-table">
      <header>
        <h1 className="h4">Filter</h1>
        <button className="btn btn-link-primary">Clear</button>
      </header>
      <section className="price-group">
        <h1 className="h5">Price</h1>
        <form className="price-form">
          <label htmlFor="price">
            <span>499</span>
            <span>2499</span>
            <span>4999</span>
          </label>
          <input type="range" name="" id="price" step="20" />
        </form>
      </section>
      {filterData.map((filter) => {
        const { heading, name, filterType, inputType } = filter;

        return (
          <section className={name + "-group"} key={name}>
            <h1 className="h5">{heading}</h1>
            {filterType.map((type) => {
              return (
                <div className="form-input" key={type.id}>
                  <FilterInput inputType={inputType} name={name} id={type.id} />
                  <label htmlFor={type.id}> {type.label} </label>
                </div>
              );
            })}
          </section>
        );
      })}
    </aside>
  );
};

export default FilterTable;
