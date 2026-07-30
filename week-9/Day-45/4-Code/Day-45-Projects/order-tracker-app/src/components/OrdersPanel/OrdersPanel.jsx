import OrderCard from "../OrderCard/OrderCard";
import "./OrdersPanel.css";

const OrdersPanel = ({ orders }) => {
  const pendingOrders = orders.filter((order) => order.status === "pending");

  const completedOrders = orders.filter(
    (order) => order.status === "completed",
  );

  return (
    <section className="orders-panel">
      <div className="order-section">
        <h3>Pending Orders</h3>

        {pendingOrders.length === 0 ? (
          <p className="empty-message">No pending orders</p>
        ) : (
          pendingOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>

      <div className="order-section">
        <h3>Completed Orders</h3>

        {completedOrders.length === 0 ? (
          <p className="empty-message">No completed orders</p>
        ) : (
          completedOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>
    </section>
  );
};

export default OrdersPanel;
