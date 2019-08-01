import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function NasaImgList() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    Axios.get('https://dog.ceo/api/breeds/image/random/10').then(res => {
      console.log(res);
      setNasa(res.data.message);
    });
  }, []);
  return (
    <div>
      {nasa.map(nasaImg => (
        <h6>{nasaImg}</h6>
      ))}
    </div>
  );
}
