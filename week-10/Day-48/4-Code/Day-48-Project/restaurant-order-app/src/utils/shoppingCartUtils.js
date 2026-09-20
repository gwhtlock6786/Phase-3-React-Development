export const addItemUtil = (cart, menuItem) => {
  const existingItem = cart.find((item) => item.id === menuItem.id);

  if (existingItem) {
    const updatedCart = cart.map((item) => {
      if (item.id === menuItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }

      return item;
    });
    return updatedCart;
  } else {
    const newItem = {
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1,
    };

    return [...cart, newItem];
  }
};

export const calculateTotal = (subTotal) => {
  const tax = subTotal * 0.08;

  return tax + subTotal;
};

export const calculateSubtotal = (cart) => {
  return cart.reduce((total, cartItem) => {
    return total + Number(cartItem.quantity) * Number(cartItem.price);
  }, 0);
};
