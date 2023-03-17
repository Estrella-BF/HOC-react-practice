import React from "react";

const UpdatedComponent = (OriginalComponent) => {
    console.log('with counter', OriginalComponent);
  function NewComponent(props) {
    console.log('with props', props);
  //render OriginalComponent and pass on its props.
    return <OriginalComponent />;
  }
  return NewComponent;
};
export default UpdatedComponent;