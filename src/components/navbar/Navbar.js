import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2>MNgenzi fashion</h2>
      </Link>
      <ul className="navbar-ul">
        <li>Womens</li>
        <li>Mens</li>
        <li>Branding</li>
        <li>Weeding</li>
        <Link to="/about">
        <li>About us</li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <button className="nav-btn">Login</button>
      </ul>
    </div>
  );
};

export default Navbar;
