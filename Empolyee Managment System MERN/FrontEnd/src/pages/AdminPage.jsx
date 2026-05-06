import React, { useState } from "react";
import Header from "../components/other/Header";
import CreateTask from "../components/other/CreateTask";
import Alltasks from "../components/other/Alltasks";

const AdminPage = () => {
  const [user, setUser] = useState("Admin");

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-semibold text-gray-700">Admin Panel</h2>
        <button className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
          Settings
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <Header changeUser={changeUser} user={user} />
        
        <div className="mt-8">
          <CreateTask />
        </div>

        <div className="mt-8">
          <Alltasks />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
