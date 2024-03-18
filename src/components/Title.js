import React from 'react';

const TitleInput = ({ title, setTitle }) => {
  return (
    <div>
      <label htmlFor="title">Title:</label>
      <input 
        type="text" 
        id="title" 
        value={title} 
        placeholder='Add Task Title'
        onChange={(e) => setTitle(e.target.value)} 
      />
    </div>
  );
};

export default TitleInput;
