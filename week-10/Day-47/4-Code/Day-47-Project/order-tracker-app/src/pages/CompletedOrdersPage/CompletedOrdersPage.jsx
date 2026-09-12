import OrderList from "../../components/OrderList/OrderList";
import {
  sortOrders,
  filterOrdersByCustomer,
  ORDER_STATUS,
  filterOrdersByStatus,
} from "../../utils/orderUtils";
import { useState } from "react";
import CustomerFilter from "../../components/CustomerFilter/CustomerFilter";

const CompletedOrdersPage = ({ orders, setOrders }) => {
  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const completedOrders = filterOrdersByStatus(ORDER_STATUS.COMPLETED, orders);

  const filteredOrders = filterOrdersByCustomer(
    completedOrders,
    selectedCustomer,
  );

  const sortedOrders = sortOrders(filteredOrders, sortBy);

  return (
    <div>
      <CustomerFilter
        orders={completedOrders}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <OrderList
        orders={sortedOrders}
        setOrders={setOrders}
        title="Completed Orders"
      />
    </div>
  );
};

export default CompletedOrdersPage;
