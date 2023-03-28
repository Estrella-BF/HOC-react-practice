import React, { useState } from "react";
import withCounter from "./withCounter.js"


function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);
    return (
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => setFontSize((size) => size + 1)}>
          Increase on hover
        </button>
        <p style={{ fontSize }}>
          Size of font in onMouseOver function: {fontSize}
        </p>

        <div>
      {/*Further code..*/}
      <p>Value of 'name' in ClickIncrease: {props.name}</p>
    </div>
    </div>
  );
}
export default withCounter(HoverIncrease);
