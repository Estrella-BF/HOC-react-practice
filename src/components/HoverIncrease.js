import React, { useState } from "react";
import withCounter from "./withCounter.js"


function HoverIncrease(props) {
    // const [fontSize, setFontSize] = useState(10);
    const { counterNameAttribute, incrementWeight, fontSize,fontWeight, incrementFontSize } = props; 

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
      <p style={{ fontSize, fontWeight }}>Size: {fontSize}, Weight: {fontWeight}</p>

        <div>
      {/*Further code..*/}
      <p>Value of '{props.nameAttribute}': {counterNameAttribute}</p>
    </div>
    </div>
  );
}
export default withCounter(HoverIncrease, 5);
