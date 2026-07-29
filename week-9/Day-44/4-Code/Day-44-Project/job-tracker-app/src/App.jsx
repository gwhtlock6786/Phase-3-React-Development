import "./App.css";
import AddJobForm from "./components/AddJobForm/AddJobForm.jsx";
import JobList from "./components/JobList/JobList";
import jobs from "./data/jobs-data.js";
import JobStats from "./components/JobStats/JobStats.jsx";
import StatusFilter from "./components/StatusFilter/StatusFilter.jsx";

function App() {
  return (
    <>
      <JobList jobs={jobs} />
      <hr />
      <AddJobForm />
      <hr />
      <JobStats jobs={jobs} />
      <hr />
      <StatusFilter />
    </>
  );
}

export default App;
