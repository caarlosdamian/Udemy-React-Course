import { useState, useMemo, useRef,useCallback } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import Component from "./components/Component";

const functionalCounert = new Set()

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  // const [show, setShow] = useState(false);


  const incrementA = () => {
    console.log('incrementA')
    setCountA(countA + 1);
  };
  const incrementB = () => {
    console.log('incrementB')
    setCountB(countB + 1);
  };
  functionalCounert.add(incrementA)
  functionalCounert.add(incrementB)
  console.log(functionalCounert)

  // const memoComponenta = useMemo(() => {
  //   return <ComponentA count={countA} />;
  // }, [countA]);
  // const inputRef = useRef();
  return (
    <div className="App">

      <p>Counert 1:  {countA}</p> <p>Counert 2: {countB}</p>
      <button type="text" onClick={incrementA}>Increment count 1</button>
      <button type="text" onClick={incrementB}>Increment count 2</button>

      {/* <h1>Focus on input field</h1>
      <input ref={inputRef} type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
      <button type="text" onClick={()=>{inputRef.current.focus()}}>click me</button>
      <button type="text" onClick={()=>setShow(!show)}>click me</button>

      <p></p>
      <h1>Unmonted Component</h1>
     
      {show &&  <Component/>} */}
      {/* App js count A: {countA}
      <p><button onClick={incrementA}>IncrementA</button></p>
      <p><button onClick={incrementB}>IncrementA</button></p>

      {memoComponenta}
      <ComponentB count={countB}/> */}
    </div>
  );
}

export default App;
