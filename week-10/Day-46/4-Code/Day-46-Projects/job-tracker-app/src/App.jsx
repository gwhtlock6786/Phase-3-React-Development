import { useEffect, useState } from "react";
import "./App.css";

import AddJobForm from "./components/AddJobForm/AddJobForm.jsx";
import JobList from "./components/JobList/JobList";
import jobsData from "./data/jobs-data.js";
import JobStats from "./components/JobStats/JobStats.jsx";
import StatusFilter from "./components/StatusFilter/StatusFilter.jsx";

function App() {
  // ==========================
  // Jobs State
  // Load from localStorage on initial render
  // ==========================

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");

    return savedJobs ? JSON.parse(savedJobs) : jobsData;
  });

  // ==========================
  // Filter State
  // ==========================

  const [selectedStatus, setSelectedStatus] = useState("All");

  // ==========================
  // Sort State
  // ==========================

  const [sortBy, setSortBy] = useState("date");

  // ==========================
  // Save jobs to localStorage
  // Runs whenever jobs changes
  // ==========================

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // ==========================
  // Filter Jobs
  // ==========================

  const filteredJobs =
    selectedStatus === "All"
      ? jobs
      : jobs.filter((job) => job.status === selectedStatus);

  // ==========================
  // Sort Jobs
  // ==========================

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "company":
        return a.company.localeCompare(b.company);

      case "status":
        return a.status.localeCompare(b.status);

      case "date":
      default:
        return new Date(b.statusDate) - new Date(a.statusDate);
    }
  });

  function handleResetJobs() {
    localStorage.removeItem("jobs");
    setJobs(jobsData);

    setSelectedStatus("All");
    setSortBy("date");
  }

  return (
    <>
      <StatusFilter
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <button className="reset-demo-btn" onClick={handleResetJobs}>
        Reset Demo Data
      </button>
      <hr />

      <JobList jobs={sortedJobs} setJobs={setJobs} />

      <hr />

      <AddJobForm setJobs={setJobs} />

      <hr />

      <JobStats jobs={jobs} />
    </>
  );
}

export default App;
