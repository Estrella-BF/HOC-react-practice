import React, { useState } from "react";
import withCounter from "./withCounter.js"

function ClickIncrease(props) {

  const { counterNameAttribute, incrementWeight, fontSizeValue, fontWeightValue, incrementFontSize } = props; 

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
      <p style={{ fontSize: fontSizeValue, fontWeight: fontWeightValue }}>Size: {fontSizeValue}, Weight: {fontWeightValue}</p>
      <div>
        {/* Further code..*/}
        {/*Now render the value of the 'name' prop */ }
        <p> Value of '{props.nameAttribute}': {counterNameAttribute}</p>
      </div>
    </div>
    
  );
}

export default withCounter(ClickIncrease, 10);
