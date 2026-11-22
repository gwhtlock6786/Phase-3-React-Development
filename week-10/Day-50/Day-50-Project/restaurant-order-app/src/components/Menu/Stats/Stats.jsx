import "./Stats.css";

const Stats = ({ totalItemsInCart, subtotal }) => {
  return (
    <section className="cart-stats">
      <div className="cart-stat">
        <span className="cart-stat-label">Items in Cart</span>
        <strong>{totalItemsInCart}</strong>
      </div>

      <div className="cart-stat">
        <span className="cart-stat-label">Pre-Tax Total</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>
    </section>
  );
};

export default Stats;
