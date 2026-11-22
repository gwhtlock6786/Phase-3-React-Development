import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  const TAX_RATE = 0.08;

  // Add an item or increase its quantity if it already exists
  function addItem(menuItem) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === menuItem.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      const newItem = {
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1,
      };

      return [...prevCart, newItem];
    });
  }

  // Remove an item completely from the cart
  function removeItem(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  // Increase an item's quantity
  function incrementQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  // Decrease an item's quantity
  // Remove the item if its quantity reaches zero
  function decrementQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Calculate subtotal before tax
  function calculateSubtotal() {
    return cart.reduce((total, cartItem) => {
      return total + Number(cartItem.quantity) * Number(cartItem.price);
    }, 0);
  }

  // Calculate sales tax
  function calculateTax() {
    return calculateSubtotal() * TAX_RATE;
  }

  // Calculate total including tax
  function calculateTotal() {
    return calculateSubtotal() + calculateTax();
  }

  // Calculate total individual items in cart
  function calculateTotalItemsInCart() {
    return cart.reduce((total, cartItem) => {
      return total + Number(cartItem.quantity);
    }, 0);
  }

  // Return state and all cart management functions
  return {
    cart,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateTotalItemsInCart,
  };
}
