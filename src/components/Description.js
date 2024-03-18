import React from 'react'

const DescriptionInput = ({ description, setDescription }) => {
      return (
        <div>
          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            placeholder='Add Task Description'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
      );
    };
    
    export default DescriptionInput;
    