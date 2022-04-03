export const cartInitialPrice = (cartProducts) => {
  return cartProducts.reduce((acc, curr) => {
    return acc + curr.originalPrice * curr.qty;
  }, 0);
};

export const cartTotalQuantity = (cartProducts) => {
  return cartProducts.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);
};

export const cartDiscount = (cartProducts) => {
  return cartProducts.reduce((acc, curr) => {
    return acc + (curr.originalPrice - curr.discountedPrice) * curr.qty;
  }, 0);
};

export const cartTotal = (cartProducts) => {
  return cartProducts.reduce((acc, curr) => {
    return acc + curr.discountedPrice * curr.qty;
  }, 0);
};
