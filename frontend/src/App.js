import React, { useEffect, useState } from 'react';
import './App.css';
import { pingServer } from './api/pingServer';  // Import our helper

function App() {
  const [serverMessage, setServerMessage] = useState('');

  // This runs once when the app loads
  useEffect(() => {
    const getServerMessage = async () => {
      const msg = await pingServer();
      if (msg) setServerMessage(msg);
    };
    getServerMessage();
  }, []);

  return (
    <div className="App">
      <h1>🏴‍☠️ Treasure Map Game 🗺️</h1>
      <p>📡 Backend says: {serverMessage}</p>
    </div>
  );
}

export default App;
