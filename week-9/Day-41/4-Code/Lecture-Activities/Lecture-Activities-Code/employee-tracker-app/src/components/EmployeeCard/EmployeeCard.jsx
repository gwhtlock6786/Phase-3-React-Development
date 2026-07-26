// ================================
// IMPORTS (styles for this component)
// ================================
import './EmployeeCard.css';

function EmployeeCard({ employee }) {

  return (

    // ================================
    // EMPLOYEE CARD CONTAINER
    // Represents a single employee "card UI"
    // ================================
    <div className="employee-card">

      {/* ================================
          EMPLOYEE NAME + CONDITIONAL BADGE
          Shows IT badge only if employee.isIT is true
      ================================= */}
      <h2>
        {employee.name}

        {/* Conditional rendering using ternary operator */}
        {employee.isIT ? (
          <span id="it-badge">IT!</span>
        ) : null}

      </h2>

      {/* ================================
          EMPLOYEE DETAILS SECTION
          Displays key employee information
      ================================= */}
      <p>
        <strong>Position:</strong> {employee.position}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

    </div>
  );
}

export default EmployeeCard;