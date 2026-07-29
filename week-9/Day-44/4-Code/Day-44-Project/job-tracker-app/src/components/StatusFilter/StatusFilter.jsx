import "./StatusFilter.css";

const StatusFilter = () => {
  return (
    <section className="status-filter">
      <h2>Filter Jobs</h2>

      <div className="filter-buttons">
        <button>All</button>
        <button>Applied</button>
        <button>Interviewing</button>
        <button>Offer</button>
      </div>
    </section>
  );
};

export default StatusFilter;
