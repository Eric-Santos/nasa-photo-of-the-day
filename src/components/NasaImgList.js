import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NasaImgListcard from './NasaImgListCard';

export default function NasaImgList() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
        setNasa(res.data.hdurl);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      {nasa.map(nasaImg => (
        <NasaImgListcard imgUrl={nasaImg} />
      ))}
    </div>
  );
}
