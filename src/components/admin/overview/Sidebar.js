import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faShoppingCart, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ username, onLogout }) => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <div className="user-info">
        <p>Welcome, {username}!</p>
        <button className="logout-btn" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faTachometerAlt} /> Overview
          </Link>
        </li>
        <li>
          <Link to="products">
            <FontAwesomeIcon icon={faBox} /> Products
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FontAwesomeIcon icon={faShoppingCart} /> Orders
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <FontAwesomeIcon icon={faUsers} /> Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
