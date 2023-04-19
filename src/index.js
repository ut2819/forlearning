import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const name='utkarsh';
const img1='https://picsum.photos/200';
const img2='https://picsum.photos/200';
const img3='https://picsum.photos/200';
const link="https://www.thapatechnical.com/";

ReactDOM.render(
  <>
  <h1 style={{color: "#fa9191",textAlign: "center",textTransform: "capitalize",textShadow:"0px,2px,4px,#ffe9c5",fontFamily:"'Source Serif Pro', serif",fontWeight: "bold"}}>My Name is {name}</h1>
  <div className='img'>
  <img src={img1} alt='random img'/>
  <img src={img2} alt='random img'/>
   <a href={link} target='_blank'>
  <img src={img3} alt='random img'/>
   </a>
   </div>
   </>,
  document.getElementById('root')
);

