export const addItem = (cart, menuItem) => {
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
  const tax = subtotal * 0.08;

  return tax + subtotal;
};

export const calculateSubtotal = (cart) => {
  return cart.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
};
