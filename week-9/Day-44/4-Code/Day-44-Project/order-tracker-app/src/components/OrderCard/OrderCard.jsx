import "./OrderCard.css";

const OrderCard = ({ order }) => {
  const isCompleted = order.status === "completed";

  return (
    <article className={isCompleted ? "order-card completed" : "order-card"}>
      <h4>Order #{order.id.toString().slice(-4)}</h4>

      <p>
        <strong>Customer:</strong> {order.customerName}
      </p>

      <p>
        <strong>Items:</strong> {order.items}
      </p>

      <p className="order-total">${order.total.toFixed(2)}</p>

      <p>{new Date(order.timestamp).toLocaleTimeString()}</p>

      {isCompleted ? (
        <p className="completed-text">✅ Completed</p>
      ) : (
        <button className="complete-btn">Mark Complete</button>
      )}
    </article>
  );
};

export default OrderCard;
