import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



import React, { useState } from 'react';

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  // CREATE or UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = name;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, name]);
    }
    setName('');
  };

  // DELETE
  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  // EDIT
  const handleEdit = (index) => {
    setName(users[index]);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>React CRUD App</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name"
          required
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleEdit(index)}>✏️</button>
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
// https://www.youtube.com/watch?v=_j3yiadVGQA