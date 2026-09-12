import OrderList from "../../components/OrderList/OrderList";
import "./OrdersPage.css";
import CustomerFilter from "../../components/CustomerFilter/CustomerFilter";
import { filterOrdersByCustomer, sortOrders } from "../../utils/orderUtils";
import { useState } from "react";

const OrdersPage = ({ orders, setOrders }) => {
  const [selectedCustomer, setSelectedCustomer] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredOrders = filterOrdersByCustomer(orders, selectedCustomer);

  const sortedOrders = sortOrders(filteredOrders, sortBy);

  const pendingOrders = sortedOrders.filter(
    (order) => order.status === "pending",
  );

  const completedOrders = sortedOrders.filter(
    (order) => order.status === "completed",
  );

  return (
    <section className="orders-panel">
      <CustomerFilter
        orders={orders}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div>
        <OrderList
          orders={pendingOrders}
          setOrders={setOrders}
          title="Pending Orders"
        />
      </div>

      <div>
        <OrderList
          orders={completedOrders}
          setOrders={setOrders}
          title="Completed Orders"
        />
      </div>
    </section>
  );
};

export default OrdersPage;
