import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Restaurant App</h1>
      <nav className="main-nav">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Header;
