import { useState } from "react";
import "./App.css";

import AddJobForm from "./components/AddJobForm/AddJobForm.jsx";
import JobList from "./components/JobList/JobList";
import jobsData from "./data/jobs-data.js";
import JobStats from "./components/JobStats/JobStats.jsx";
import StatusFilter from "./components/StatusFilter/StatusFilter.jsx";

function App() {
  const [jobs, setJobs] = useState(jobsData);

  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredJobs =
    selectedStatus === "All"
      ? jobs
      : jobs.filter((job) => job.status === selectedStatus);

  return (
    <>
      <StatusFilter
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <hr />
      <JobList jobs={filteredJobs} setJobs={setJobs} />

      <hr />

      <AddJobForm setJobs={setJobs} />

      <hr />

      <JobStats jobs={jobs} />
    </>
  );
}

export default App;
