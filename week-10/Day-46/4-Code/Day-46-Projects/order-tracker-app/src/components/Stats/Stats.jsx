import "./Stats.css";

const Stats = ({ pending = 0, completed = 0, revenue = 0 }) => {
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
