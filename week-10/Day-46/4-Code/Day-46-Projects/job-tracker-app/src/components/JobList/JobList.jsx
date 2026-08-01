import JobCard from "../JobCard/JobCard.jsx";
import "./JobList.css";

const JobList = ({ jobs, setJobs }) => {
  return (
    <div className="job-list-div">
      <h2 id="job-list-heading">Jobs List</h2>

      <section className="jobs-container">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            company={job.company}
            position={job.position}
            name={job.name}
            salary={job.salary}
            status={job.status}
            statusDate={job.statusDate}
            id={job.id}
            setJobs={setJobs}
          />
        ))}
      </section>
    </div>
  );
};

export default JobList;
