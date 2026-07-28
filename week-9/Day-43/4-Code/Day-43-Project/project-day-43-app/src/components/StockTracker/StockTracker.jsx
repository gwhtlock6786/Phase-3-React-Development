import React from "react";
import "./StockTracker.css";

const StockLevel = () => {
  const [stockLevel, setStockLevel] = React.useState(10);

  const lowStock = stockLevel < 5 && stockLevel > 0;
  const outOfStock = stockLevel === 0;

  function handleIncreaseStock() {
    setStockLevel((stockLevel) => stockLevel + 1);
  }

  function handleDecreaseStock() {
    if (stockLevel > 0) {
      setStockLevel((stockLevel) => stockLevel - 1);
    }
  }

  function resetStock() {
    setStockLevel(10);
  }

  return (
    <div className="stock-containter">
      <h2>StockLevel</h2>
      {lowStock && <h3 id="low-stock">LOW STOCK</h3>}
      {outOfStock && <h3 id="out-of-stock">OUT OF STOCK</h3>}
      <p>Stock: {stockLevel}</p>
      <div className="stock-button-group">
        <button className="increase-btn" onClick={handleIncreaseStock}>
          Add Stock +1
        </button>
        <hr />
        <button className="decrease-btn" onClick={handleDecreaseStock}>
          Remove Stock -1
        </button>
        <hr />
        <button className="reset-btn" type="button" onClick={resetStock}>
          Reset Stock
        </button>
      </div>
    </div>
  );
};

export default StockLevel;
