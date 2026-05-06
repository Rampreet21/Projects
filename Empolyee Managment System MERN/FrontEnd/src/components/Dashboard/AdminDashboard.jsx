import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import Alltasks from "../other/Alltasks";

const AdminDashboard = ({ name, changeUser }) => {
  return (
    <div className="bg-[#1C1C1C] h-screen p-10">
      <Header changeUser={changeUser} user={name} />
      <CreateTask />
      <Alltasks />
      
    </div>
  );
};

export default AdminDashboard;
