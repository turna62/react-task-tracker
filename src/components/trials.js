// App.js
import React, { useState } from 'react';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput';
import SubmitButton from './SubmitButton';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    // Create a new task object
    const newTask = {
      title: title,
      description: description
    };
    // Add the new task to the list of tasks
    setTasks([...tasks, newTask]);
    // Clear the input fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} />
      <SubmitButton onClick={handleSubmit} />
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
