import React from 'react'
import TodoItem from './TodoItem'
const TaskList = () =>{
    return(
        <div>
            <TodoItem/>
            <div className='flex list-none px-4 py-2 bg-gray-800  text-white placeholder-white-500  rounded-b border-t border-grey-800 justify-between items-center'>
                <p>0 item left</p>
                <div className='flex'>
                    <p>All</p>
                    <p className='mx-4'>Active</p>
                    <p>Completed</p>
                </div>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default TaskList