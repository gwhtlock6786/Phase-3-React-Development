import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = ({ employeeList }) => {
  return (
    <div className="employee-list">
      {employeeList.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
