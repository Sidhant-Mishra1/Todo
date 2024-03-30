import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import './TaskList.css';



const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="list-container">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-item ${task.completed ? 'completed' : ''}`}
        >
          <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
            onClick={() => handleToggleTask(task.id)}
          >
            {task.text}
          </span>
          <div>
            <button className='complete' onClick={() => handleToggleTask(task.id)}>
              {task.completed ? (
                <FontAwesomeIcon icon={faCheckSquare} className={`checkbox-icon checked`} />
              ) : (
                <FontAwesomeIcon icon={faSquare} className={`checkbox-icon unchecked`} />
              )}
            </button>
            <button className='delete' onClick={() => handleDeleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
