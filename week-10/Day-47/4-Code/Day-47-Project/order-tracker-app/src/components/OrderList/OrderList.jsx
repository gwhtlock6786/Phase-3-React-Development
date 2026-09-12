import OrderCard from "../OrderCard/OrderCard";
import "./OrderList.css";
const OrderList = ({ orders, setOrders, title }) => {
  return (
    <div className="order-section">
      <h3>{title}</h3>
      {orders.length === 0 ? (
        <p className="empty-message">No {title.toLowerCase()} to display.</p>
      ) : (
        orders.map((order) => (
          <OrderCard key={order.id} order={order} setOrders={setOrders} />
        ))
      )}
    </div>
  );
};

export default OrderList;
