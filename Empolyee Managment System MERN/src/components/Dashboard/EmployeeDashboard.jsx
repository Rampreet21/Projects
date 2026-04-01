import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen p-10'>
        <Header />
        <TaskNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard