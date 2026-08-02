import "./JobCard.css";

const JobCard = ({
  id,
  company,
  position,
  name,
  salary,
  status,
  statusDate,
  setJobs,
}) => {
  function handleDeleteJob() {
    // const confirmed = window.confirm(
    //   "Are you sure you want to delete this job application?",
    // );

    // if (!confirmed) return;

    setJobs((previousJobs) => previousJobs.filter((job) => job.id !== id));
  }

  function handleStatusChange(event) {
    const newStatus = event.target.value;

    setJobs((previousJobs) =>
      previousJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status: newStatus,
              statusDate: new Date().toISOString(),
            }
          : job,
      ),
    );
  }

  return (
    <article className="job-card">
      <h2>{name}</h2>

      <p>
        <strong>Company</strong>
        <span>{company}</span>
      </p>

      <p>
        <strong>Position</strong>
        <span>{position}</span>
      </p>

      <p>
        <strong>Salary</strong>
        <span>${salary.toLocaleString()}</span>
      </p>

      <div className="job-status-row">
        <label>
          <strong>Status</strong>

          <select value={status} onChange={handleStatusChange}>
            <option value="Applied">Applied</option>

            <option value="Interviewing">Interviewing</option>

            <option value="Offer">Offer</option>
          </select>
        </label>
      </div>

      <p>
        <strong>Status Date</strong>

        <span>{new Date(statusDate).toLocaleDateString()}</span>
      </p>

      <button className="delete-job-btn" onClick={handleDeleteJob}>
        Delete Job
      </button>
    </article>
  );
};

export default JobCard;
