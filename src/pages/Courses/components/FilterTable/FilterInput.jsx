import React from "react";

const FilterInput = ({ inputType, name, id }) => {
  return <input type={inputType} id={id} name={name} />;
};

export default FilterInput;
