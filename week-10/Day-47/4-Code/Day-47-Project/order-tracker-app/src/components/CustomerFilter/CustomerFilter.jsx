import "./CustomerFilter.css";

const CustomerFilter = ({
  orders,
  selectedCustomer,
  setSelectedCustomer,
  sortBy,
  setSortBy,
}) => {
  // ==========================
  // Build Unique Customer List
  // ==========================

  const customers = [
    "All",
    ...new Set(orders.map((order) => order.customerName)),
  ];

  return (
    <section className="customer-filter">
      <h2>Filter & Sort Orders</h2>

      {/* Customer Filter */}

      <label htmlFor="customer-filter">Select Customer</label>

      <select
        id="customer-filter"
        value={selectedCustomer}
        onChange={(event) => setSelectedCustomer(event.target.value)}
      >
        {customers.map((customer) => (
          <option key={customer} value={customer}>
            {customer}
          </option>
        ))}
      </select>

      {/* Sort Dropdown */}

      <label htmlFor="sort-orders">Sort Orders</label>

      <select
        id="sort-orders"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="newest">Newest First</option>

        <option value="oldest">Oldest First</option>

        <option value="customer">Customer (A–Z)</option>

        <option value="highest">Highest Total</option>

        <option value="lowest">Lowest Total</option>
      </select>
    </section>
  );
};

export default CustomerFilter;
