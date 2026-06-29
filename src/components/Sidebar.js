import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>BillSystem</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/invoices">Invoices</Link>
        </li>

      
        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;