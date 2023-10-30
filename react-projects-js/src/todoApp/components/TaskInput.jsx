import React, { useState } from 'react'

const TaskInput = ({ addTask }) => {

  const [task, setTask] = useState('');

  const handleInputValue = (event) => {
    setTask(event.target.value);
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    addTask(task);
    setTask('');
  };

  return (

    <form
      onSubmit={handleAddTask}
    >

      <input
        type="text"
        value={task}
        placeholder='Add Item'
        onChange={handleInputValue}
      />

      <button> + </button>

    </form>
  )
}

export default TaskInput