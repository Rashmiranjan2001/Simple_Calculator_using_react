import React from "react";
import { add,sub,mult,div } from "./Calc";
function App(){
    return (
        <React.Fragment>
     <ul>
       <li> The sum of 2 given numbers is {add(40,4)} </li>
       <li> The sub of 2 given numbers is {sub(40,4)} </li>
       <li>The multiplication of 2 given numbers is {mult(40,4)} </li>
       <li>The division of 2 given numbers is {div(40,4)} </li>
     </ul>
   </React.Fragment>
    )
};

export default App;