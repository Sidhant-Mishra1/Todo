import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import './TaskInput.css';

const TaskInput = () => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskInput, completed: false }));
      setTaskInput('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
