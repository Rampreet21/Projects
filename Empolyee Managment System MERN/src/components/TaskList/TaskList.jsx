import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>01-01-2026</h4>
                </div>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>01-01-2026</h4>
                </div>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>01-01-2026</h4>
                </div>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>01-01-2026</h4>
                </div>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>01-01-2026</h4>
                </div>
            </div>
        </div>
    )
}

export default TaskList