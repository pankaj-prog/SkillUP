import React from "react";

const FilterInput = ({ inputType, name, id, value, dispatch }) => {
  const inputHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: value });
    } else {
      dispatch({ type: `uncheck_${e.target.name}`, payload: value });
    }
  };

  return (
    <input
      onClick={inputHandler}
      type={inputType}
      id={id}
      name={name}
      value={value}
    />
  );
};

export default FilterInput;
