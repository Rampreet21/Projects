import React from "react";
import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ name, tasks, changeUser, taskCounts }) => {
  console.log(tasks);
  console.log(taskCounts);
  return (
    <div className="bg-[#1C1C1C] h-screen p-10">
      <Header changeUser={changeUser} user={name} />
      <TaskNumbers taskCounts={taskCounts} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default EmployeeDashboard;
