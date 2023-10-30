import { useState } from "react";

import TaskInput from "./components/taskInput";
import TaskItem from "./components/TaskItem";

function TodoApp() {

  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask])
  };

  const deleteTask = (deleteTask) => {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTask))
  }

  const toggleCheck = (taskName) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName
          ? { ...task, checked: !task.checked }
          : task,
       )
    )
  }

  return (
    <>
      <h1
        style={{
          textAlign: 'center'
        }}> Task Manager </h1>

      <TaskInput
        addTask={addTask}
      />
      <div>
        <span> TODO'SS </span>
        <ul>
          {
            toDoList.map((task) => (
              <TaskItem
                task={task}
                key={task.taskName}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))
          }
        </ul>
      </div> 
    </>
  )
}

export default TodoApp