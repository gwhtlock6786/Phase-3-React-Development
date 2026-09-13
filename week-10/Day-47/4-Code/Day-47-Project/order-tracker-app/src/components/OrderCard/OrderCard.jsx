import "./OrderCard.css";

import {
  formatCurrency,
  formatTime,
  ORDER_STATUS,
} from "../../utils/orderUtils";
const OrderCard = ({ order, setOrders }) => {
  const isCompleted = order.status === ORDER_STATUS.COMPLETED;

  function handleCompleteOrder() {
    setOrders((previousOrders) =>
      previousOrders.map((currentOrder) =>
        currentOrder.id === order.id
          ? {
              ...currentOrder,
              status: ORDER_STATUS.COMPLETED,
              completedAt: new Date().toISOString(),
            }
          : currentOrder,
      ),
    );
  }

  function handleDeleteOrder() {
    setOrders((previousOrders) =>
      previousOrders.filter((currentOrder) => currentOrder.id !== order.id),
    );
  }

  return (
    <article className={isCompleted ? "order-card completed" : "order-card"}>
      <h4>Order #{order.id.toString().slice(-4)}</h4>

      <p>
        <strong>Customer:</strong> {order.customerName}
      </p>

      <p>
        <strong>Items:</strong> {order.items}
      </p>

      <p className="order-total">{formatCurrency(order.total)}</p>

      <p>Created: {formatTime(order.timestamp)}</p>

      <div className="button-options">
        {isCompleted ? (
          <p className="completed-text">✅ Completed</p>
        ) : (
          <button className="complete-btn" onClick={handleCompleteOrder}>
            Mark Complete
          </button>
        )}

        <button className="delete-btn" onClick={handleDeleteOrder}>
          Delete Order
        </button>
      </div>
    </article>
  );
};

export default OrderCard;
