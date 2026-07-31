import OrderForm from "../OrderForm/OrderForm";
import OrdersPanel from "../OrdersPanel/OrdersPanel";

import "./DashboardLayout.css";

const DashboardLayout = ({ orders, setOrders }) => {
  return (
    <main className="dashboard-layout">
      <OrderForm setOrders={setOrders} />

      <OrdersPanel orders={orders} setOrders={setOrders} />
    </main>
  );
};

export default DashboardLayout;
