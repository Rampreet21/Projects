import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded ${
      pathname === path ? "bg-sky-700" : "hover:bg-sky-700"
    }`;

  return (
    <div className="w-60 h-screen bg-gradient-to-b from-sky-600 to-sky-800 text-white p-5 overflow-y-auto scroll-smooth flex flex-col">
      
      <h1 className="text-xl font-bold mb-6">WELCOME 👋</h1>

      <div className="space-y-2">
        <Link to="/admin" className={linkClass("/admin")}>
          Admin
        </Link>
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <p className="text-xs mt-4 opacity-70">INTERFACE</p>
        <Link to="/components" className={linkClass("/components")}>
          Employees
        </Link>
        <Link to="/utilities" className={linkClass("/utilities")}>
          Utilities
        </Link>

        <p className="text-xs mt-4 opacity-70">ADDONS</p>
        <Link to="/tables" className={linkClass("/tables")}>
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;