import "./App.css";
import JobList from "./components/JobList/JobList";
import jobs from "./data/jobs-data.js";

function App() {
  return (
    <>
      <JobList jobs={jobs} />
    </>
  );
}

export default App;
