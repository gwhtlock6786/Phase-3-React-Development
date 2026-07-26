// ================================
// IMPORTS (external components + styles)
// ================================
import Header from './components/Header/Header';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';
import Button from './components/Button/Button';
import './App.css';

function App() {

  // ================================
  // EMPLOYEE DATA (mock data layer)
  // Each object represents one employee
  // ================================
  let employee1 = {
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    email: "example@place.com",
    isIT: false
  };

  let employee2 = {
    name: "Jack Smith",
    position: "Software Engineer",
    department: "Development",
    email: "example@place.com",
    isIT: true
  };

  let employee3 = {
    name: "Jane Doe",
    position: "Software Engineer",
    department: "Development",
    email: "example@place.com",
    isIT: false
  };

  // ================================
  // DATA STRUCTURE (array for mapping)
  // This allows us to reuse components dynamically
  // ================================
  const employees = [employee1, employee2, employee3];

  return (

    // ================================
    // MAIN APP LAYOUT
    // ================================
    <div className="App">

      {/* HEADER SECTION */}
      <Header />

      {/* PAGE TITLE */}
      <h2>Employee List</h2>

      {/* ACTION BUTTON */}
      <Button />

      {/* EMPLOYEE LIST SECTION */}
      <section className="employee-list">

        {/* 
          Dynamically render EmployeeCard components
          using .map() for reusability
        */}
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            employee={employee}
          />
        ))}

      </section>

    </div>
  );
}

export default App;