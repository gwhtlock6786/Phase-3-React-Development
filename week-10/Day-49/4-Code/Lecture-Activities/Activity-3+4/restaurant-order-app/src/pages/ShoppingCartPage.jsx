import { useState } from "react";

import ShoppingCartlist from "../components/ShoppingCart/ShoppingCartList/ShoppingCartlist";
import TipCalculator from "../components/ShoppingCart/TipCalculator/TipCalculator";
import OrderSummary from "../components/ShoppingCart/OrderSummary/OrderSummary";

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
  const [selectedTip, setSelectedTip] = useState(null);

  // Cart calculations
  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = calculateTotal();

  // Tip and final order calculations
  const tipAmount = selectedTip ? subtotal * (selectedTip / 100) : 0;

  const grandTotal = total + tipAmount;

  return (
    <main className="shopping-cart-page">
      <section className="shopping-cart-header">
        <p className="cart-eyebrow">Your Order</p>

        <h2>Shopping Cart</h2>

        <p>Review your selections before completing your order.</p>
      </section>

      <ShoppingCartlist
        cart={cart}
        removeItem={removeItem}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />

      <TipCalculator selectedTip={selectedTip} onTipChange={setSelectedTip} />

      <OrderSummary
        subtotal={subtotal}
        tax={tax}
        selectedTip={selectedTip}
        tipAmount={tipAmount}
        grandTotal={grandTotal}
      />
    </main>
  );
};

export default ShoppingCartPage;
