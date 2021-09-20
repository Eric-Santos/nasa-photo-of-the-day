import React from 'react';

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.nasaState.title}</h1>
      <div>{props.nasaState.date}</div>
      <img src={props.nasaState.hdurl} alt="nasa" />
      <p>{props.nasaState.explanation}</p>
    </div>
  );
}
