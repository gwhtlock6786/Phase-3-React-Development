import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Stats from "./components/Stats/Stats";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import sampleOrders from "./data/sample-orders";

function App() {
  const [orders, setOrders] = useState(sampleOrders);

  const pendingOrders = orders.filter((order) => order.status === "pending");

  const completedOrders = orders.filter(
    (order) => order.status === "completed",
  );

  const totalRevenue = completedOrders.reduce(
    (total, order) => total + order.total,
    0,
  );

  return (
    <section className="app-section">
      <Header />

      <Stats
        pending={pendingOrders.length}
        completed={completedOrders.length}
        revenue={totalRevenue}
      />

      <DashboardLayout orders={orders} setOrders={setOrders} />
    </section>
  );
}

export default App;
