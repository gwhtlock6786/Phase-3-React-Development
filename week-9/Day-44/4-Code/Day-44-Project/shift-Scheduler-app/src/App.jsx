import "./App.css";
import Header from "./components/Header/Header";
import EmployeeFilter from "./components/EmployeeFilter/EmployeeFilter";
import HoursCard from "./components/HoursCard/HoursCard";
import ShiftTable from "./components/ShiftTable/ShiftTable";
import shifts from "../data/shift-data.js";

function App() {
  return (
    <>
      <Header />
      <EmployeeFilter />
      <HoursCard />
      <ShiftTable shifts={shifts} />
    </>
  );
}

export default App;
