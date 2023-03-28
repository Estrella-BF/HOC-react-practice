import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {

  function NewComponent() {

    const [counter, setCounter] = useState(10); //create a Hook
    const [fontSize, setFontSize] = useState(10);
    const [ fontWeight, setFontWeight] = useState(100);
    return <OriginalComponent 
    counterNameAttribute={counter} //export our counter Hook
    fontWeight={fontWeight}
    fontSize={fontSize}
    incrementWeight={() => setFontWeight((fontWeight) => fontWeight +100)}
    incrementFontSize={() => setFontSize((fontSize) => fontSize + 1)}
    nameAttribute="Pollosssss"/>;
  }

  return NewComponent;
};
export default UpdatedComponent;
