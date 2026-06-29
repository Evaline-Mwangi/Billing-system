import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function TopBar() {
  const location = useLocation();

  let title = "Dashboard";

  if (location.pathname === "/products") {
    title = "Products";
  } else if (location.pathname === "/invoices") {
    title = "Invoice";
  } else if (location.pathname === "/invoice-history") {
    title = "Invoice History";
  }

  return (
    <div className="topbar">
      <h3>{title}</h3>

      <div className="topbar-right">
        <span>Welcome, Wayne</span>
      </div>
    </div>
  );
}

export default TopBar;