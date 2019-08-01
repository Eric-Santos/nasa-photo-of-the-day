import React /* useState, useEffect*/ from 'react';
import './App.css';
import NasaImgList from './components/NasaImgList';

function App() {
  // const [nasaPic, setNasaPic] = useState('');
  // useEffect(() => {}, []);
  return (
    <div className="App">
      <NasaImgList />
    </div>
  );
}

export default App;
