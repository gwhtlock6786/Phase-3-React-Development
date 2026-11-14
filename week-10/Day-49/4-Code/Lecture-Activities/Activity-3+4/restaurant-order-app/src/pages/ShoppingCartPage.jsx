import ShoppingCartlist from "../components/ShoppingCart/ShoppingCartList/ShoppingCartlist";

import "./ShoppingCartPage.css";

const ShoppingCartPage = ({
  cart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  calculateSubtotal,
  calculateTax,
  calculateTotal,
}) => {
  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = calculateTotal();

  return (
    <main className="shopping-cart-page">
      <section className="shopping-cart-header">
        <p className="cart-eyebrow">Your Order</p>

        <h2>Shopping Cart</h2>

        <p>Review your selections before completing your order.</p>
      </section>

      <ShoppingCartlist
        cart={cart}
        total={total}
        subtotal={subtotal}
        tax={tax}
        removeItem={removeItem}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </main>
  );
};

export default ShoppingCartPage;
