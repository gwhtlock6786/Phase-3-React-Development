import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import PendingOrdersPage from "../pages/PendingOrdersPage/PendingOrdersPage";
import CompletedOrdersPage from "../pages/CompletedOrdersPage/CompletedOrdersPage";
import AddOrderPage from "../pages/AddOrderPage/AddOrderPage";
const AppRoutes = ({ orders, setOrders }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/orders/pending" element={<PendingOrdersPage />} />
      <Route path="/orders/completed" element={<CompletedOrdersPage />} />
      <Route path="/orders/add" element={<AddOrderPage />} />
    </Routes>
  );
};

export default AppRoutes;
