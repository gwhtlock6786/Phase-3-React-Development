import "./OrderForm.css";

const OrderForm = () => {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Order Added!");
  }

  return (
    <section className="form-panel">
      <h2>Add New Order</h2>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customer-name">Customer Name</label>

          <input
            type="text"
            id="customer-name"
            placeholder="Enter customer name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="order-items">Order Items</label>

          <input
            type="text"
            id="order-items"
            placeholder="Burger, Fries, Soda"
          />
        </div>

        <div className="form-group">
          <label htmlFor="order-total">Order Total ($)</label>

          <input
            type="number"
            id="order-total"
            placeholder="18.75"
            min="0"
            step="0.01"
          />
        </div>

        <button className="add-order-btn" type="submit">
          Add Order
        </button>
      </form>

      <hr />

      <button className="reset-btn">Reset Orders</button>
    </section>
  );
};

export default OrderForm;
