import React, { useEfect, useState } from 'react';
import './App.css':

function App() {
  const [chore, setChores] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/GetChores')
        .then(res => red.json())
        .then(data => setChores(data));
  }, []);

  return (
    <div className="App">
      <h1> Chore Tracker</h1>
      <h2>Message from Mom:</h2>
      <p>{message || 'Please feed the animals :)'}</p>
      <h2>Chores</h2>
      <ul>
  {chores.map(chore => (
    <li key={chore.id}>{chore.name} - {chore.status} </li>
  ))}
</ul>
  </div>
);
}

export default APP;
      
    
