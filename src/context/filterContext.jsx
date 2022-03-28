import { useReducer, createContext, useContext } from "react";

import { filterReducer } from "./utils/filterReducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

export const initialFilterState = {
  rating: 0,
  price: 0,
  sort: "",
  category: [],
};

const FilterProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider
      value={{ filterDispatch: dispatch, filterState: filterState }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
