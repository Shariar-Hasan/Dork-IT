// App.js
import React, { useState } from 'react';
import './App.css';
import DorkForm from './Components/DorkForm/DorkForm';
import DorkList from './Components/DorkList/DorkList';

function App() {
  const [dorks, setDorks] = useState([]);

  const addDork = (data) => {
    const { dorkType, dorkText } = data;
    if (dorkText.trim() !== '') {
      setDorks([...dorks, `${dorkType}:${dorkText}`]);
    }
  };

  const handleSearch = () => {
    if (dorks.length > 0) {
      const googleDork = dorks.join(' ');
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(googleDork)}`;
      window.open(googleSearchUrl, '_blank');
    }
  };

  return (
    <div className="App flex justify-center p-6 space-x-6">
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Google Dork Search</h1>
        <DorkForm addDork={addDork} />
      </div>
      <div className="w-1/2">
        <DorkList dorks={dorks} handleSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
