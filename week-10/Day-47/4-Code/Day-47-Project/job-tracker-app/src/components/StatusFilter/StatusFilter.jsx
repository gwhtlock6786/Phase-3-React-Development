import "./StatusFilter.css";

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
  function handleFilterChange(status) {
    setSelectedStatus(status);
  }

  return (
    <section className="status-filter">
      <h2>Filter Jobs</h2>

      <div className="filter-buttons">
        <button
          onClick={() => handleFilterChange("All")}
          className={selectedStatus === "All" ? "active-filter" : ""}
        >
          All
        </button>

        <button
          onClick={() => handleFilterChange("Applied")}
          className={selectedStatus === "Applied" ? "active-filter" : ""}
        >
          Applied
        </button>

        <button
          onClick={() => handleFilterChange("Interviewing")}
          className={selectedStatus === "Interviewing" ? "active-filter" : ""}
        >
          Interviewing
        </button>

        <button
          onClick={() => handleFilterChange("Offer")}
          className={selectedStatus === "Offer" ? "active-filter" : ""}
        >
          Offer
        </button>
      </div>
    </section>
  );
};

export default StatusFilter;
