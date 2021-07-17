import React, { useState, useEffect, useRef } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  const componenRef = useRef(true);
  useEffect(() => {
   return () =>{ componenRef.current =false}
  }, [])
  const fakeFectch = () => {
    setTimeout(() => {
        if(componenRef.current===true)
      setCount(count + 1);
    }, 2000);
  };
  return (
    <div>
      <h1>Component counter: {count}</h1>
      <button onClick={fakeFectch}>Fake Fetch</button>
    </div>
  );
};

export default Component;
