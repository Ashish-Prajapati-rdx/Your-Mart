import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo" onClick={() => navigate("/")}>
        Your-Mart
      </h2>

      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>

        {userInfo ? (
          <>
            <span className="user-name">👤 {userInfo.name}</span>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
