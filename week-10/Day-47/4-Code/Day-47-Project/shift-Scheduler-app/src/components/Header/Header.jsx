import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="dashboard-header">
      <h1>Employee Shift Hours Dashboard</h1>

      <p>Filter employees and calculate total scheduled hours</p>

      <nav>
        <Link to="/home">home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/addShift">AddShift</Link>
      </nav>
    </header>
  );
};

export default Header;
