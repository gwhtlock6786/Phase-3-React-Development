// ================================
// IMPORTS (styles for this component)
// ================================
import './Header.css';

function Header() {

  // ================================
  // DATA (static values for display)
  // These could later become props or come from a backend
  // ================================
  let name = "Gershon Whitlock"; // logged-in user name
  let siteName = "Employee Tracker"; // application title

  return (

    // ================================
    // HEADER CONTAINER (main navbar section)
    // ================================
    <header className="header">

      {/* LEFT SIDE: BRAND + WELCOME MESSAGE */}
      <div className="left">

        {/* SITE TITLE */}
        <h1>{siteName}</h1>

        {/* USER GREETING */}
        <p>Welcome, {name}!</p>

      </div>

      {/* NAVIGATION MENU */}
      <nav>

        {/* NAV LINKS (could later use React Router) */}
        <a href="#">Home</a>
        <a href="#">Employees</a>
        <a href="#">Departments</a>
        <a href="#">Settings</a>

      </nav>

    </header>
  );
}

export default Header;