import "./OrderCard.css";

const OrderCard = ({ order, setOrders }) => {
  const isCompleted = order.status === "completed";

  function handleCompleteOrder() {
    setOrders((previousOrders) =>
      previousOrders.map((currentOrder) =>
        currentOrder.id === order.id
          ? {
              ...currentOrder,
              status: "completed",
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

      <p className="order-total">${order.total.toFixed(2)}</p>

      <p>Created: {new Date(order.timestamp).toLocaleTimeString()}</p>

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
