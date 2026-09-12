import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import PendingOrdersPage from "../pages/PendingOrdersPage/PendingOrdersPage";
import CompletedOrdersPage from "../pages/CompletedOrdersPage/CompletedOrdersPage";
import AddOrderPage from "../pages/AddOrderPage/AddOrderPage";
const AppRoutes = ({ orders, setOrders }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage orders={orders} />} />
      <Route
        path="/orders"
        element={<OrdersPage orders={orders} setOrders={setOrders} />}
      />
      <Route
        path="/orders/pending"
        element={<PendingOrdersPage orders={orders} setOrders={setOrders} />}
      />
      <Route
        path="/orders/completed"
        element={<CompletedOrdersPage orders={orders} setOrders={setOrders} />}
      />
      <Route
        path="/orders/add"
        element={<AddOrderPage setOrders={setOrders} />}
      />
    </Routes>
  );
};

export default AppRoutes;
