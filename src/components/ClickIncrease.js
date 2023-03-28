import React, { useState } from "react";
import withCounter from "./withCounter.js"

function ClickIncrease(props) {
  const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      {/*Set the font size of this text to the fontSize variable.*/}
      {/*Furthermore, display its value as well.*/}
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
      <div>
    {/* Further code..*/}
    {/*Now render the value of the 'name' prop */ }
    <p> Value of 'name' in HoverIncrease: {props.name}</p>
  </div>
    </div>
    
  );
}

export default ClickIncrease;
