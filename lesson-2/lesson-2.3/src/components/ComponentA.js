import React, { useEffect } from "react";
let renderCount = 0;
const ComponentA = ({ count }) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <div>
      <h1>
        ComponentA :render {renderCount} time || Counter: {count}
      </h1>
    </div>
  );
};

export default ComponentA;
