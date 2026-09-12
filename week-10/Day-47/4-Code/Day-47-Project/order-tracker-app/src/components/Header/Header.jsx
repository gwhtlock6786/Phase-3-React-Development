import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="dashboard-header">
      <h1>Order Tracker Dashboard</h1>

      <p>
        Manage customer orders, track completion status, and monitor revenue.
      </p>

      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/orders">All Orders</Link>
        <Link to="/orders/pending">Pending Orders</Link>
        <Link to="/orders/completed">Completed Orders</Link>
        <Link to="/orders/add">Add Order</Link>
      </nav>
    </header>
  );
};

export default Header;
