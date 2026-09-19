import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Restruant App</h1>
      <nav className="main-navs">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
};

export default Header;
