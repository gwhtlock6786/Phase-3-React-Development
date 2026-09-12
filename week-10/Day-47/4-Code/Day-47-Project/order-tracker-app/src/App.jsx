import { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { loadStoredOrders, saveOrders } from "./utils/orderUtils";
import sampleOrders from "./data/sample-orders";

function App() {
  const [orders, setOrders] = useState(() => {
    return loadStoredOrders() || sampleOrders;
  });

  //keeps the state data synced with local storage so that the data persists even after a page refresh
  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  //reset the orders to the original demo orders and remove the saved orders from local storage
  function handleResetOrders() {
    const confirmed = window.confirm(
      "Are you sure you want to restore the original demo orders?",
    );

    if (!confirmed) return;

    localStorage.removeItem("orders");

    setOrders(sampleOrders);
  }

  return (
    <section className="app-section">
      <BrowserRouter>
        <Header />

        <button className="reset-demo-btn" onClick={handleResetOrders}>
          Reset Demo Data
        </button>

        <AppRoutes orders={orders} setOrders={setOrders} />
      </BrowserRouter>
    </section>
  );
}

export default App;
