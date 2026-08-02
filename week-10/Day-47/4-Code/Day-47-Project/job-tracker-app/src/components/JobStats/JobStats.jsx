import "./JobStats.css";

const JobStats = ({ jobs }) => {
  const totalJobs = jobs.length;

  const totalSalary = jobs.reduce((total, job) => {
    return total + job.salary;
  }, 0);

  return (
    <section className="job-stats">
      <h2>Job Stats</h2>
      <section className="stat-container">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p>{totalJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Total Salary</h3>
          <p>${totalSalary.toLocaleString()}</p>
        </div>
      </section>
    </section>
  );
};

export default JobStats;
