import EmployeeCard from "../EmployeeCard/EmployeeCard"
import "./EmployeeList.css";

const EmployeeList = ({employees}) => {

    if(!employees.length){
        return <p>No Employees found.</p>
    }

  return (
    <section className="employee-list">
        <h2>Employees</h2>
        <hr />
        
        <div className="employee-grid">
        {employees.map((employee) => (
            <EmployeeCard 
                key={employee.id}
                employee= {employee}   
            />
        ))}
        </div>

    </section>
  )
}

export default EmployeeList