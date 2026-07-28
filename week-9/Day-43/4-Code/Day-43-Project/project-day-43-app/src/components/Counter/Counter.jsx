import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1>Counter</h1>

      <div className="counter-display">
        Your number is:
        <span className="counter-number">{count}</span>
      </div>

      <div className="button-group">
        <button
          className="increase-btn"
          type="button"
          onClick={handleIncrement}
        >
          Increase +1
        </button>

        <button
          className="decrease-btn"
          type="button"
          onClick={handleDecrement}
        >
          Decrease -1
        </button>

        <button className="reset-btn" type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
