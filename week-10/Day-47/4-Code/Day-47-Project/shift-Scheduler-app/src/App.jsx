import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import EmployeeFilter from "./components/EmployeeFilter/EmployeeFilter";
import HoursCard from "./components/HoursCard/HoursCard";
import ShiftTable from "./components/ShiftTable/ShiftTable";
import AddShiftForm from "./components/AddShift/AddShift";
import shiftsData from "./data/shift-data";

import { calculateShiftHours } from "./utils/shiftUtils";

function App() {
  const [shifts, setShifts] = useState(() => {
    const savedShifts = localStorage.getItem("shifts");

    return savedShifts ? JSON.parse(savedShifts) : shiftsData;
  });

  const [selectedEmployee, setSelectedEmployee] = useState("All");

  const [sortBy, setSortBy] = useState("date");

  const [dateFilter, setDateFilter] = useState("all");

  // Save shifts whenever state changes
  useEffect(() => {
    localStorage.setItem("shifts", JSON.stringify(shifts));
  }, [shifts]);

  // Reset application back to demo data
  function handleResetShifts() {
    const confirmed = window.confirm(
      "Are you sure you want to restore the original shift data?",
    );

    if (!confirmed) return;

    setShifts([...shiftsData]);
  }

  // Update existing shift
  function handleUpdateShift(updatedShift) {
    setShifts((previousShifts) =>
      previousShifts.map((shift) =>
        shift.id === updatedShift.id ? updatedShift : shift,
      ),
    );
  }

  // Delete shift
  function handleDeleteShift(id) {
    setShifts((previousShifts) =>
      previousShifts.filter((shift) => shift.id !== id),
    );
  }

  // Filter by employee
  const employeeFilteredShifts =
    selectedEmployee === "All"
      ? shifts
      : shifts.filter((shift) => shift.employee === selectedEmployee);

  // Filter by date
  const filteredShifts = employeeFilteredShifts.filter((shift) => {
    const shiftDate = new Date(shift.date);

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    switch (dateFilter) {
      case "today":
        return shiftDate.toDateString() === today.toDateString();

      case "upcoming":
        return shiftDate >= today;

      case "week": {
        const weekFromNow = new Date();

        weekFromNow.setDate(today.getDate() + 7);

        return shiftDate >= today && shiftDate <= weekFromNow;
      }

      case "all":
      default:
        return true;
    }
  });

  // Sort shifts
  const sortedShifts = [...filteredShifts].sort((a, b) => {
    switch (sortBy) {
      case "employee":
        return a.employee.localeCompare(b.employee);

      case "role":
        return a.role.localeCompare(b.role);

      case "hours":
        return calculateShiftHours(b) - calculateShiftHours(a);

      case "date":
      default:
        return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <>
      <Header />

      <button className="reset-shifts-btn" onClick={handleResetShifts}>
        Reset Demo Shifts
      </button>

      <EmployeeFilter
        shifts={shifts}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        sortBy={sortBy}
        setSortBy={setSortBy}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
      />

      <section id="shift-info">
        <HoursCard shifts={sortedShifts} />

        <ShiftTable
          shifts={sortedShifts}
          onUpdateShift={handleUpdateShift}
          onDeleteShift={handleDeleteShift}
        />
      </section>

      <hr />

      <AddShiftForm setShifts={setShifts} />
    </>
  );
}

export default App;
