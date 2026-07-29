import "./EmployeeFilter.css";

const EmployeeFilter = () => {
  return (
    <section className="filter-section">
      <label htmlFor="employee-filter">Select Employee:</label>

      <select id="employee-filter">
        <option value="all">All Employees</option>

        <option value="Maria">Maria</option>

        <option value="James">James</option>

        <option value="Alex">Alex</option>

        <option value="Sam">Sam</option>
      </select>
    </section>
  );
};

export default EmployeeFilter;
