export const filterReducer = (state, action) => {
  switch (action.type) {
    case "rating":
      return {
        ...state,
        rating: action.payload,
      };
    case "sort":
      return {
        ...state,
        sort: action.payload,
      };
    case "category":
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    case "uncheck_category":
      return {
        ...state,
        category: [
          ...state.category.filter((category) => category !== action.payload),
        ],
      };
    case "price_range":
      return {
        ...state,
        price: action.payload,
      };
    case "clear_filters":
      return { ...action.payload };
    default:
      throw new Error(`unknown action type:  ${action.type}`);
  }
};
