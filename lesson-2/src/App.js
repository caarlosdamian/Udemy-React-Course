import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
export const NameContext = React.createContext();
export const ColorContext = React.createContext();

function App() {
  return (
    <NameContext.Provider value={"Smith"}>
      <ColorContext.Provider value={"red"}>
        <div className="App">
          <h1>Blank</h1>
          <ComponentA />
        </div>
      </ColorContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
