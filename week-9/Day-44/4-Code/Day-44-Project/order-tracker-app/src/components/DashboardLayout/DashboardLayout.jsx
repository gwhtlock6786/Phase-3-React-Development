import OrderForm from "../OrderForm/OrderForm";
import OrdersPanel from "../OrdersPanel/OrdersPanel";

import "./DashboardLayout.css";

const DashboardLayout = ({ orders }) => {
  return (
    <main className="dashboard-layout">
      <OrderForm />

      <OrdersPanel orders={orders} />
    </main>
  );
};

export default DashboardLayout;
