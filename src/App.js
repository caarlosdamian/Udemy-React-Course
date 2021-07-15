import Card from "./components/Card";
import React, { useState } from "react";
// import faker from "faker";
import "./styles/Custom.css";

function App() {
  const [name, setName] = useState("Javier");

  const handleClick = () => {
    setName("PADROEEBNFEHJW ");
  };
  const buttonsMarkup = (
    <div>
      <button className="button button2">Blue</button>
      <button className="button button3">Red</button>
    </div>
  );

  return (
    <div className="App">
      <button className="button" onClick={handleClick}>
        Change Name
      </button>
      <Card
        name={name}
        title="Global Research Associate"
        avatar="https://cdn.fakercloud.com/avatars/millinet_128.jpg"
        onChangeName={handleClick}
      >
        {buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
