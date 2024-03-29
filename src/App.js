import SubmitButton from "./components/Submit";
import TitleInput from "./components/Title";
import DescriptionInput from "./components/Description";
import React, { useMemo, useState } from 'react';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [sumbit, setSubmit] = useMemo(false);

  const handleSubmit = () => {
    const newTask = {
      title: title,
      description: description,
      sumbit: sumbit
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="App">
     <div className="App">
      <h1>To-Do App</h1>
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput description={description} setDescription={setDescription} />
      <SubmitButton onClick={handleSubmit} />
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.title} : {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;
