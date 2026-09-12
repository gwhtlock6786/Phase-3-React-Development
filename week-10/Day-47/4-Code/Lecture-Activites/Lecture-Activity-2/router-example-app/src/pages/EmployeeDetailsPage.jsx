import { useParams } from "react-router-dom";
import employees from "../data/employee-data.js";

const EmployeeDetailsPage = () => {
  const { id } = useParams();

  const employee = employees.find((emp) => emp.id === parseInt(id));

  return (
    <div>
      <h2>EmployeeDetailsPage</h2>
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
    </div>
  );
};

export default EmployeeDetailsPage;
