import { PRICE_RANGES } from "./constants";

export const groupByCost = (orders) => {
  return orders.reduce((acc, order) => {
    const { price } = order;

    const priceRange =
      price >= 100
        ? PRICE_RANGES.HIGH
        : price >= 50
          ? PRICE_RANGES.MEDIUM
          : PRICE_RANGES.LOW;

    if (!acc[priceRange]) {
      acc[priceRange] = [];
    }

    acc[priceRange].push(order);

    return acc;
  }, {});
};
