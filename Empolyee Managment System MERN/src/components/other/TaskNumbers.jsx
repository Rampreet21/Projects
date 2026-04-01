import React from 'react'

const TaskNumbers = () => {
  return (
    <div className='flex justify-between screen gap-5 mt-10'>
        <div className=" w-[45%] bg-blue-400 rounded-xl py-6 px-9">
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-xl font-medium mt-1'>New Task</h1>
        </div>
        <div className=" w-[45%] bg-green-400 rounded-xl py-6 px-9">
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-xl font-medium mt-1'>New Task</h1>
        </div>
        <div className=" w-[45%] bg-yellow-400 rounded-xl py-6 px-9">
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-xl font-medium mt-1'>New Task</h1>
        </div>
        <div className=" w-[45%] bg-red-400 rounded-xl py-6 px-9">
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-xl font-medium mt-1'>New Task</h1>
        </div>
    </div>
  )
}

export default TaskNumbers