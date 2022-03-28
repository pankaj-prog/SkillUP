import React from "react";

const FilterInput = ({
  inputType,
  name,
  id,
  value,
  filterDispatch,
  filterState,
}) => {
  const inputHandler = (e) => {
    if (e.target.checked) {
      filterDispatch({ type: e.target.name, payload: value });
    } else {
      filterDispatch({ type: `uncheck_${e.target.name}`, payload: value });
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
