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
        value: "marketing",
      },
      {
        id: "development",
        label: "Development",
        value: "development",
      },
      {
        id: "design",
        label: "Design",
        value: "design",
      },
      {
        id: "business",
        label: "Business",
        value: "business",
      },
      {
        id: "it_security",
        label: "IT + Security",
        value: "it + security",
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
        value: 4,
      },
      {
        id: "three-and-above",
        label: "3 stars and above",
        value: 3,
      },
      {
        id: "two-and-above",
        label: "2 stars and above",
        value: 2,
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
        value: "descending",
      },
      {
        id: "low-to-high",
        label: "Price - low to high",
        value: "ascending",
      },
    ],
  },
];

const FilterTable = ({ filterDispatch, filterState, initialFilterState }) => {
  const priceRangeHandler = (e) => {
    filterDispatch({ type: "price_range", payload: e.target.value });
  };

  const clearFilters = () => {
    filterDispatch({ type: "clear_filters", payload: initialFilterState });
  };

  return (
    <aside className="filter-table">
      <header>
        <h1 className="h4">Filter</h1>
        <button className="btn btn-link-primary" onClick={clearFilters}>
          Clear
        </button>
      </header>
      <section className="price-group">
        <h1 className="h5">Price</h1>
        <form className="price-form">
          <label htmlFor="price">
            <span>299 </span>
            <span>2999</span>
            <span>5999</span>
          </label>
          <input
            type="range"
            name="price_range"
            id="price"
            step="300"
            min="299"
            max="6000"
            value={filterState.price}
            onChange={(e) => priceRangeHandler(e)}
          />
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
                  <FilterInput
                    inputType={inputType}
                    name={name}
                    id={type.id}
                    value={type.value}
                    filterDispatch={filterDispatch}
                    filterState={filterState}
                  />
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
