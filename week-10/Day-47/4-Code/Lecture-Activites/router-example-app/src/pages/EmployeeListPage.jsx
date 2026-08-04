import employeeListData from "../data/employee-data.js";
import EmployeeList from "../components/EmployeeList/EmployeeList";

const EmployeeListPage = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <EmployeeList employeeList={employeeListData} />
    </div>
  );
};

export default EmployeeListPage;
