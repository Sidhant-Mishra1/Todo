import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
const App = () => {
  return (
    <div>
      <h1>Task Scheduler</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;

