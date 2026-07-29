import JobCard from "../JobCard/JobCard.jsx";
import "./JobList.css";

const JobList = ({ jobs }) => {
  return (
    <section className="jobs-container">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          company={job.company}
          position={job.position}
          name={job.name}
          salary={job.salary}
          hireDate={job.hireDate}
        />
      ))}
    </section>
  );
};

export default JobList;
