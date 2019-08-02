import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

function App() {
  const [nasaState, setNasaState] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setNasaState(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Card nasaState={nasaState} />
    </div>
  );
}

export default App;
