import React, { useState } from "react";
import withCounter from "./withCounter.js"


function HoverIncrease(props) {

    const { counterNameAttribute, incrementWeight, fontSizeValue,fontWeightValue, incrementFontSize } = props; 

    const MouseOverEvent = () => {
      incrementWeight();
      incrementFontSize();
    }

    return (
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => MouseOverEvent() }>
          Increase on hover
        </button>
      <p style={{ fontSize: fontSizeValue, fontWeight: fontWeightValue }}>Size: {fontSizeValue}, Weight: {fontWeightValue}</p>

        <div>
      {/*Further code..*/}
      <p>Value of '{props.nameAttribute}': {counterNameAttribute}</p>
    </div>
    </div>
  );
}
export default withCounter(HoverIncrease, 5);
