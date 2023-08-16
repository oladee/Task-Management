import React from 'react'
import TodoItem from './TodoItem'
const TaskList = () =>{
    return(
        <div>
            <TodoItem/>
            <div>
                <p>0 item left</p>
                <div>
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default TaskList