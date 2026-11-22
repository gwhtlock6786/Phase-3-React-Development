import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="heading">
      <h1>Restaurant App</h1>
      <nav className="main-nav">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Header;
