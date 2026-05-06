import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-6 bg-gray-50 mt-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Create New Task</h3>
        <form className="flex flex-wrap w-full items-start justify-between gap-6">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Task Title</h3>
              <input
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Date</h3>
              <input
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Assign to</h3>
              <input
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
              <input
                className="text-sm py-2 px-3 w-4/5 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded border border-gray-300 outline-none bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-200"></textarea>
            <button className="bg-sky-600 text-white py-3 hover:bg-sky-700 px-5 rounded text-sm mt-4 w-full font-medium transition-colors">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask