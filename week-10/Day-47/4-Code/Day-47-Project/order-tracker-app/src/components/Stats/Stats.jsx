import "./Stats.css";
import {
  countOrders,
  ORDER_STATUS,
  calculateRevenue,
  formatCurrency,
  filterOrdersByStatus,
} from "../../utils/orderUtils";
const Stats = ({ orders }) => {
  const pending = countOrders(orders, ORDER_STATUS.PENDING);
  const completed = orders ? countOrders(orders, ORDER_STATUS.COMPLETED) : 0;
  const revenue = orders
    ? calculateRevenue(filterOrdersByStatus(ORDER_STATUS.COMPLETED, orders))
    : 0;

  return (
    <section className="stats-container">
      <div className="stat-card pending">
        <p className="stat-value">{pending}</p>

        <p className="stat-label">Pending</p>
      </div>

      <div className="stat-card completed">
        <p className="stat-value">{completed}</p>

        <p className="stat-label">Completed</p>
      </div>

      <div className="stat-card revenue">
        <p className="stat-value">{formatCurrency(revenue)}</p>

        <p className="stat-label">Revenue</p>
      </div>
    </section>
  );
};

export default Stats;
