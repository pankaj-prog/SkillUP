export const getFilteredData = (state, productList) => {
  const { rating, price, category, sort } = state;

  // sort by price

  let sortedProductList = [
    ...productList.sort((product1, product2) => {
      if (sort == "ascending") {
        return product1.discountedPrice - product2.discountedPrice;
      } else if (sort == "descending") {
        return product2.discountedPrice - product1.discountedPrice;
      }
    }),
  ];

  // filter by rating

  let filteredData = [
    ...sortedProductList.filter((product) => product.rating >= rating),
  ];

  // filter by category

  filteredData = category.length
    ? [
        ...filteredData.filter((product) =>
          category.includes(product.categoryName.toLowerCase())
        ),
      ]
    : [...filteredData];

  // filter by price range

  filteredData = [
    ...filteredData.filter((product) => {
      return Number(product.discountedPrice) > price;
    }),
  ];

  return [...filteredData];
};
