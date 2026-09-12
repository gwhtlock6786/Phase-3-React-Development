import "./Stats.css";
import {
  countOrders,
  ORDER_STATUS,
  calculateRevenue,
} from "../../utils/orderUtils";
const Stats = ({ orders }) => {
  const pending = orders ? countOrders(orders, ORDER_STATUS.PENDING) : 0;
  const completed = orders ? countOrders(orders, ORDER_STATUS.COMPLETED) : 0;
  const revenue = orders ? calculateRevenue(orders) : 0;
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
        <p className="stat-value">${revenue.toFixed(2)}</p>

        <p className="stat-label">Revenue</p>
      </div>
    </section>
  );
};

export default Stats;
