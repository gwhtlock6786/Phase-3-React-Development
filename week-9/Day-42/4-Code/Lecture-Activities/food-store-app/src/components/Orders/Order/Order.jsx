import "./Order.css";


const Order = ({ order }) => {
  const {
    itemName,
    quantity,
    price,
    specialInstructions
  } = order;

  return (
    <div className="order-card">
      <h4>{itemName}</h4>
      <p>Total Available: {quantity}</p>
      <p>Cost: ${price}</p>
      <p>Special Instructions: {specialInstructions}</p>
    </div>
  );
};

export default Order;