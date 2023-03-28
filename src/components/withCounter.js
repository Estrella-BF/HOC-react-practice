import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {

  function NewComponent(props) {

    const [counter, setCounter] = useState(10); //create a Hook
    return <OriginalComponent 
    counterNameAttribute={counter} //export our counter Hook
    incrementCounterNameAttribute={() => setCounter((counter) => counter + 1)}
    nameAttribute="Pollosssss"/>;
  }

  return NewComponent;
};
export default UpdatedComponent;