import React from "react";
import ReactDOM from "react-dom";
import {sum,sub,mul} from "./Eval";
ReactDOM.render(
 <>
 <ul>
   <li>sum of two num is {sum(40,4)}</li>
   <li>substraction  of two num is {sub(40,4)}</li>
   <li>multiplication of two num is {mul (40,4)}</li>

 </ul>
 </>,
 document.getElementById("root")
); 