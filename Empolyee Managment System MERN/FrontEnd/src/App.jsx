import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Utilities from "./pages/Utilities";
import Pages from "./pages/Pages";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import AdminPage from "./pages/AdminPage";

import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loggedInAdmin = localStorage.getItem("loggedInAdmin");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    if (loggedInAdmin) {
      const adminData = JSON.parse(loggedInAdmin);
      setUser(adminData.role);
      setLoggedInUserData(adminData.data);
    }
    if (user == "employee") {
      navigate("/");
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin" && password == "123") {
      const admin = { name: "Admin" };
      setLoggedInUserData(admin);
      setUser("admin");
      localStorage.setItem(
        "loggedInAdmin",
        JSON.stringify({ role: "admin", data: admin })
      );
      navigate("/admin");
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Routes>
        {/* Layout Route with nested pages */}
        <Route path="/" element={<Layout />}>
          {!user ? (
            <Route path="/" element={<Login handleLogin={handleLogin} />} />
          ) : ""}
          {user == "admin" ? (
            <Route
              path="admin"
              element={
                <AdminPage changeUser={setUser} name={loggedInUserData.name} />
              }
            />
          ) : user == "employee" ? (
            <Route
              index
              element={
                <Dashboard
                  changeUser={setUser}
                  name={loggedInUserData.name}
                  tasks={loggedInUserData.tasks}
                  taskCounts={loggedInUserData.taskCounts}
                />
              }
            />
          ) : null}
          <Route path="components" element={<Employees />} />
          <Route path="utilities" element={<Utilities />} />
          <Route path="pages" element={<Pages />} />
          <Route path="charts" element={<Charts />} />
          <Route path="tables" element={<Tables />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
