import React from "react";

const FilterInput = ({ inputType, name, id, value, dispatch, filterState }) => {
  const inputHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: value });
    } else {
      dispatch({ type: `uncheck_${e.target.name}`, payload: value });
    }
  };

  const isChecked = () => {
    if (inputType == "checkbox") {
      return filterState[name].includes(value);
    } else if (inputType == "radio") {
      return filterState[name] == value;
    }
  };

  return (
    <input
      onChange={inputHandler}
      checked={isChecked()}
      type={inputType}
      id={id}
      name={name}
      value={value}
    />
  );
};

export default FilterInput;
