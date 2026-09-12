import OrderList from "../../components/OrderList/OrderList";
import {
  sortOrders,
  filterOrdersByCustomer,
  ORDER_STATUS,
  filterOrdersByStatus,
} from "../../utils/orderUtils";
import CustomerFilter from "../../components/CustomerFilter/CustomerFilter";
import { useState } from "react";
const PendingOrdersPage = ({ orders, setOrders }) => {
  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const pendingOrders = filterOrdersByStatus(ORDER_STATUS.PENDING, orders);

  const filteredOrders = filterOrdersByCustomer(
    pendingOrders,
    selectedCustomer,
  );

  const sortedOrders = sortOrders(filteredOrders, sortBy);

  return (
    <div>
      <CustomerFilter
        orders={pendingOrders}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <OrderList
        orders={sortedOrders}
        setOrders={setOrders}
        title="Pending Orders"
      />
    </div>
  );
};

export default PendingOrdersPage;
