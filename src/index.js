import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate=new Date();
currDate=currDate.getHours();
const cssStyle={ };
let greeting="";
if(currDate>=0 && currDate<12){
  greeting="Good Morning";
  cssStyle.color="green";
}else if(currDate>=12 && currDate<21){
  greeting="Good Afternon";
  cssStyle.color="Orange";
}else{
  greeting="Good Night";
  cssStyle.color="Black";
}
ReactDOM.render(
  <>
  <div>
 <h1> Hello sir,<span style={cssStyle}> {greeting}</span></h1>
 </div>
 </>,
 document.getElementById("root")
);