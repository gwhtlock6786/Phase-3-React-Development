import "./OrderSummary.css";

const OrderSummary = ({
  subtotal,
  tax,
  selectedTip,
  tipAmount,
  grandTotal,
}) => {
  return (
    <section className="order-summary">
      <h3>Order Summary</h3>

      <div className="order-summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="order-summary-row">
        <span>Tax (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="order-summary-row">
        <span>Tip ({selectedTip ?? 0}%)</span>
        <span>${tipAmount.toFixed(2)}</span>
      </div>

      <div className="order-summary-divider"></div>

      <div className="order-summary-total">
        <span>Grand Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </section>
  );
};

export default OrderSummary;
