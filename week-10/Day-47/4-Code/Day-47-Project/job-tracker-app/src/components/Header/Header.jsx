import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/jobs"}>Jobs</Link>
        <Link to={"/about"}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
