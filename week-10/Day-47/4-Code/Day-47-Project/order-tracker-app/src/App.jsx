import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import CustomerFilter from "./components/CustomerFilter/CustomerFilter";
import sampleOrders from "./data/sample-orders";

function App() {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : sampleOrders;
  });

  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredOrders =
    selectedCustomer === "All"
      ? orders
      : orders.filter((order) => order.customerName === selectedCustomer);

  const pendingOrders = filteredOrders.filter(
    (order) => order.status === "pending",
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.timestamp) - new Date(b.timestamp);

      case "customer":
        return a.customerName.localeCompare(b.customerName);

      case "highest":
        return b.total - a.total;

      case "lowest":
        return a.total - b.total;

      case "newest":
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });

  const completedOrders = filteredOrders.filter(
    (order) => order.status === "completed",
  );

  const totalRevenue = completedOrders.reduce(
    (total, order) => total + order.total,
    0,
  );

  //keeps the state data synced with local storage so that the data persists even after a page refresh
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
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
      <Header />

      <button className="reset-demo-btn" onClick={handleResetOrders}>
        Reset Demo Data
      </button>

      <CustomerFilter
        orders={orders}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <Stats
        pending={pendingOrders.length}
        completed={completedOrders.length}
        revenue={totalRevenue}
      />

      <DashboardLayout orders={sortedOrders} setOrders={setOrders} />
    </section>
  );
}

export default App;
