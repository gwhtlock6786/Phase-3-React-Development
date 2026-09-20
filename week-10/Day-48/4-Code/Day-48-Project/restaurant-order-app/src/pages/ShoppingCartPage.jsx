import ShoppingCartlist from "../components/ShoppingCart/ShoppingCartList/ShoppingCartlist";
import { calculateSubtotal, calculateTotal } from "../utils/shoppingCartUtils";

import "./ShoppingCartPage.css";

const ShoppingCartPage = ({ cart }) => {
  const subtotal = calculateSubtotal(cart);
  const total = calculateTotal(subtotal);

  return (
    <main className="shopping-cart-page">
      <section className="shopping-cart-header">
        <p className="cart-eyebrow">Your Order</p>

        <h2>Shopping Cart</h2>

        <p>Review your selections before completing your order.</p>
      </section>

      <ShoppingCartlist cart={cart} total={total} subtotal={subtotal} />
    </main>
  );
};

export default ShoppingCartPage;
