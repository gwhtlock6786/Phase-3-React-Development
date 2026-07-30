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
        <label htmlFor={`status-${id}`}>
          <strong>Status</strong>
        </label>

        <select
          id={`status-${id}`}
          value={status}
          onChange={handleStatusChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offer">Offer</option>
        </select>
      </div>

      <p>
        <strong>Status Date</strong>
        <span>{new Date(statusDate).toLocaleDateString()}</span>
      </p>
    </article>
  );
};

export default JobCard;
