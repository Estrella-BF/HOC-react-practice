import React, { useState } from "react";
import withCounter from "./withCounter.js"

function ClickIncrease(props) {
  //const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
  
  const { counterNameAttribute, incrementWeight, fontSize, fontWeight, incrementFontSize } = props; 

  const clickEvent = () => {
    incrementWeight();
    incrementFontSize();
  }

  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => clickEvent() }>
        Increase with click
      </button>
      {/*Set the font size of this text to the fontSize variable.*/}
      {/*Furthermore, display its value as well.*/}
      <p style={{ fontSize, fontWeight }}>Size: {fontSize}, Weight: {fontWeight}</p>
      <div>
    {/* Further code..*/}
    {/*Now render the value of the 'name' prop */ }
    <p> Value of '{props.nameAttribute}': {counterNameAttribute}</p>
  </div>
    </div>
    
  );
}

export default withCounter(ClickIncrease, 10);
