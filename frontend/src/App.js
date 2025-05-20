import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const fetchGreeting = async () => {
  const res = await fetch(`https://fullstack-app-production-b872.up.railway.app/greet?name=${name}`);
  const data = await res.json();
  setGreeting(data.message);
};

  return (
    <div style={{ padding: 40 }}>
      <h2>React + Express Greet App</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={fetchGreeting}>Greet Me</button>

      {greeting && (
        <div style={{ marginTop: 20, fontWeight: 'bold' }}>
          {greeting}
        </div>
      )}
    </div>
  );
}

export default App;
