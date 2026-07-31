import "./EmployeeFilter.css";

const EmployeeFilter = ({ shifts, selectedEmployee, setSelectedEmployee }) => {
  const employees = ["All", ...new Set(shifts.map((shift) => shift.employee))];

  function handleChange(event) {
    setSelectedEmployee(event.target.value);
  }

  return (
    <section className="employee-filter">
      <h2>Filter by Employee</h2>

      <select value={selectedEmployee} onChange={handleChange}>
        {employees.map((employee) => (
          <option key={employee} value={employee}>
            {employee}
          </option>
        ))}
      </select>
    </section>
  );
};

export default EmployeeFilter;
