import React from 'react'

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
    return (
        <>
            <li>
                <div>
                    <input type="checkbox"
                        checked={task.checked}
                        onChange={() => toggleCheck(task.taskName)}
                    />
                    <p>{task.taskName}</p>
                </div>
                <h1 onClick={() => deleteTask(task.taskName)}> - </h1>
            </li >
        </>
    )
}

export default TaskItem