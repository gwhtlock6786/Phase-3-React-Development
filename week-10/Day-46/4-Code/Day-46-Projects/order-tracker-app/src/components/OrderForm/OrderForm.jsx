import { useState } from "react";
import "./OrderForm.css";

const OrderForm = ({ setOrders }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    items: "",
    total: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newOrder = {
      id: Date.now(),

      customerName: formData.customerName,

      items: formData.items,

      total: Number(formData.total),

      status: "pending",

      timestamp: new Date().toISOString(),
    };

    setOrders((previousOrders) => [...previousOrders, newOrder]);

    setFormData({
      customerName: "",

      items: "",

      total: "",
    });
  }

  function handleReset() {
    setOrders([]);
  }

  return (
    <section className="form-panel">
      <h2>Add New Order</h2>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>

          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            placeholder="Enter customer name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="items">Order Items</label>

          <input
            type="text"
            id="items"
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="Burger, Fries, Soda"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="total">Order Total ($)</label>

          <input
            type="number"
            id="total"
            name="total"
            value={formData.total}
            onChange={handleChange}
            placeholder="18.75"
            min="0"
            step="0.01"
            required
          />
        </div>

        <button className="add-order-btn" type="submit">
          Add Order
        </button>
      </form>

      <hr />

      <button className="reset-btn" onClick={handleReset}>
        Reset Orders
      </button>
    </section>
  );
};

export default OrderForm;
