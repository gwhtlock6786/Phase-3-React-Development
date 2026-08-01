import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import EmployeeFilter from "./components/EmployeeFilter/EmployeeFilter";
import HoursCard from "./components/HoursCard/HoursCard";
import ShiftTable from "./components/ShiftTable/ShiftTable";
import AddShiftForm from "./components/AddShift/AddShift";
import shiftsData from "./data/shift-data";

function App() {
  const [shifts, setShifts] = useState(shiftsData);

  const [selectedEmployee, setSelectedEmployee] = useState("All");

  const filteredShifts =
    selectedEmployee === "All"
      ? shifts
      : shifts.filter((shift) => shift.employee === selectedEmployee);

  return (
    <>
      <Header />

      <a className="add-shift-link" href="#add-shift">
        Add Shift
      </a>

      <EmployeeFilter
        shifts={shifts}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />

      <section id="shift-info">
        <HoursCard shifts={filteredShifts} />

        <ShiftTable shifts={filteredShifts} setShifts={setShifts} />
      </section>

      <hr />

      <AddShiftForm setShifts={setShifts} />
    </>
  );
}

export default App;
