import React from "react";

const Content = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Dashboard
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      <div className="mt-6 bg-white h-[400px] rounded-lg shadow">
        {/* Empty content */}
      </div>

    </div>
  );
};

export default Content;