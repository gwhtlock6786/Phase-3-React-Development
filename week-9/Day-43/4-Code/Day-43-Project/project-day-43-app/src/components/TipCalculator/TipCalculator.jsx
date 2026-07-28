import { useState } from "react";
import "./TipCalculator.css";

const TipCalculator = () => {
  const [total, setTotal] = useState(null);
  const [subTotal, setSubTotal] = useState(0.0);
  const [tipPercentage, setTipPercentage] = useState(10);

  function calculateTotal() {
    if (subTotal <= 0) {
      return 0;
    }
    let tipAmount = subTotal * (tipPercentage / 100);

    return tipAmount + subTotal;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTotal(calculateTotal());
  }

  function handleChange(event) {
    setSubTotal(Number(event.target.value));
  }

  return (
    <div id="tip-counter-contianer">
      <h2>TipCalculator</h2>

      <h3>Choose tip percentage</h3>

      <hr className="tip-breaker" />

      <div className="tip-buttongroup">
        <button
          onClick={() => setTipPercentage(10)}
          className={tipPercentage === 10 ? "tip-btn active" : "tip-btn"}
          type="button"
        >
          10%
        </button>
        <button
          onClick={() => setTipPercentage(15)}
          className={tipPercentage === 15 ? "tip-btn active" : "tip-btn"}
          type="button"
        >
          15%
        </button>
        <button
          onClick={() => setTipPercentage(20)}
          className={tipPercentage === 20 ? "tip-btn active" : "tip-btn"}
          type="button"
        >
          20%
        </button>
      </div>

      <section id="display-amount">
        <h3>Before tip: ${subTotal.toFixed(2)}</h3>
        <h3>Current Tip Percentage: {tipPercentage}%</h3>
        {total !== null && <h3>Total amount due: ${total.toFixed(2)}</h3>}
      </section>

      <form id="tip-form" onSubmit={handleSubmit}>
        <label htmlFor="sub-total">Enter subtotal</label>
        <input
          type="number"
          value={subTotal}
          id="sub-total"
          name="sub-total"
          onChange={handleChange}
        />
        <button type="submit" className="tip-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TipCalculator;
