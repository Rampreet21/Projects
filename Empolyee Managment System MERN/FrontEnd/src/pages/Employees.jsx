import React from "react";

const Employees = () => {
  const employeesData = [
    {
      id: 1,
      name: "John Doe",
      newTask: 5,
      activeTask: 3,
      completed: 2,
      failed: 0,
    },
    {
      id: 2,
      name: "Sarah Smith",
      newTask: 3,
      activeTask: 2,
      completed: 1,
      failed: 1,
    },
    {
      id: 3,
      name: "John Doe",
      newTask: 5,
      activeTask: 3,
      completed: 2,
      failed: 0,
    },
    {
      id: 4,
      name: "Sarah Smith",
      newTask: 3,
      activeTask: 2,
      completed: 1,
      failed: 1,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Employees</h2>
        <button className="bg-sky-600 text-white px-4 py-2 rounded shadow hover:bg-sky-700">
          Add Employee
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-sky-600 to-sky-700 text-white">
              <th className="px-6 py-4 text-left font-semibold">Employee Name</th>
              <th className="px-6 py-4 text-center font-semibold">New Task</th>
              <th className="px-6 py-4 text-center font-semibold">Active Task</th>
              <th className="px-6 py-4 text-center font-semibold">Completed</th>
              <th className="px-6 py-4 text-center font-semibold">Failed</th>
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee) => (
              <tr
                key={employee.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {employee.name}
                </td>
                <td className="px-6 py-4 text-center text-sky-600 font-bold text-lg">
                  {employee.newTask}
                </td>
                <td className="px-6 py-4 text-center text-amber-500 font-bold text-lg">
                  {employee.activeTask}
                </td>
                <td className="px-6 py-4 text-center text-green-600 font-bold text-lg">
                  {employee.completed}
                </td>
                <td className="px-6 py-4 text-center text-red-600 font-bold text-lg">
                  {employee.failed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employees;
