import React from 'react';
//({imgUrl}) <-- references an object key, instead of using ()(props) return {props.imgUrl} vv
export default function NasaImgListCard({ imgUrl }) {
  return <img src={imgUrl} alt="nasa of the day" />;
}
