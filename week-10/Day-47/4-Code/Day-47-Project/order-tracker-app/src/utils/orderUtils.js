export const ORDER_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
};

export function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

export function loadStoredOrders() {
  const savedOrders = localStorage.getItem("orders");

  return savedOrders ? JSON.parse(savedOrders) : null;
}

export function createOrder(customerName, items, total) {
  return {
    id: Date.now(),

    customerName,

    items,

    total,

    status: ORDER_STATUS.PENDING,

    timestamp: new Date().toISOString(),
  };
}

export function validateOrder(customerName, items, total) {
  if (customerName === "" || items === "" || isNaN(total)) {
    return false;
  }

  return true;
}

export function calculateRevenue(orders) {
  return orders.reduce((sum, order) => sum + order.total, 0);
}

export function countOrders(orders, status) {
  return orders.filter((order) => order.status === status).length;
}

export function formatCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString();
}

export function filterOrdersByCustomer(orders, customerName) {
  return customerName === "All"
    ? orders
    : orders.filter((order) => order.customerName === customerName);
}

export function sortOrders(orders, sortBy) {
  return [...orders].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.timestamp) - new Date(b.timestamp);

      case "customer":
        return a.customerName.localeCompare(b.customerName);

      case "highest":
        return b.total - a.total;

      case "lowest":
        return a.total - b.total;

      case "newest":
      default:
        return new Date(b.timestamp) - new Date(a.timestamp);
    }
  });
}

export function filterOrdersByStatus(status, orders) {
  return orders.filter((order) => order.status === status);
}
