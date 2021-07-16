import React, { useState, useEffect } from "react";
import "./styles/Custom.css";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import Button from "./elemnt/Button";
import axios from "axios";
const theme = {
  primary: "#4CAF50",
  mango: "yellow",
};

function App() {
  const [card, setCard] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      });
  }, [id]);

  const [showCard, setShowCard] = useState(true);

  const toggleShowCard = () => setShowCard(!showCard);
  // const deleteCardHandler = (cardIndex) => {
  //   const cards_copy = [...cards];
  //   cards_copy.splice(cardIndex, 1);
  //   setCards(cards_copy);
  // };
  const changeNameHandler = (event, id) => {
    //1. which card

    //2. make a copy of the cards
    const card_copy = { ...card };
    //3. change the name of the specific card
    card_copy.name = event.target.value;
    //4. set the cards with the latest version of card copy
    setCard(card_copy);
  };
  // const buttonStyle = {
  //   backgroundColor: null
  // }
  // const classes = ["button"];
  // if (card.length < 3) classes.push("pink");
  // if (card.length < 2) classes.push("red text");
  const cardsMarkup = showCard && (
    <Card
      avatar={card.avatar}
      name={card.name}
      phone={card.phone}
      key={card.id}
      // onDelete={() => deleteCardHandler(index)}
      onChangeName={(event) => changeNameHandler(event, card.id)}
    />
  );
  // card.map((card, index) => (
  //   <Card
  //     avatar={card.avatar}
  //     name={card.name}
  //     phone={card.phone}
  //     key={card.id}
  //     // onDelete={() => deleteCardHandler(index)}
  //     onChangeName={(event) => changeNameHandler(event, card.id)}
  //   />
  // ));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <input type='text' value={id} onChange={e=>setId(e.target.value)}></input>
        <Button color="mango" length={card.length}>
          Toggle
        </Button>
        <button className="button" onClick={toggleShowCard}>
          Toggle show/hide
        </button>
        {cardsMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
