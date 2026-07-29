import "./JobCard.css";

const JobCard = ({ company, position, name, salary, status, statusDate }) => {
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

      <p>
        <strong>Status</strong>
        <span>{status}</span>
      </p>

      <p>
        <strong>Status Date</strong>
        <span>{new Date(statusDate).toLocaleDateString()}</span>
      </p>
    </article>
  );
};

export default JobCard;
