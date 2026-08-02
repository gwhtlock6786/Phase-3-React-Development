import "./EmployeeFilter.css";

const EmployeeFilter = ({
  shifts,
  selectedEmployee,
  setSelectedEmployee,
  sortBy,
  setSortBy,
  dateFilter,
  setDateFilter,
}) => {
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
      <label htmlFor="sort-shifts">Sort Shifts</label>

      <select
        id="sort-shifts"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="date">Date</option>

        <option value="employee">Employee A-Z</option>

        <option value="role">Role A-Z</option>

        <option value="hours">Longest Shift</option>
      </select>

      <label htmlFor="date-filter">Date Filter</label>

      <select
        id="date-filter"
        value={dateFilter}
        onChange={(event) => setDateFilter(event.target.value)}
      >
        <option value="all">All Dates</option>

        <option value="today">Today</option>

        <option value="week">This Week</option>

        <option value="upcoming">Upcoming Shifts</option>
      </select>
    </section>
  );
};

export default EmployeeFilter;
