import Card from "./components/Card";
import React, { useState } from "react";
import "./styles/Custom.css";
import Button from './elemnt/Button'
import { ThemeProvider } from "styled-components";
const theme = {
  primary: "#4caf50",
  mango: "yellow",
};


function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Danaris Scguster",
      title: "International Operations producer",
      avatar: "https://cdn.fakercloud.com/avatars/millinet_128.jpg",
    },
    {
      id: "2",
      name: "Carlos  Damian",
      title: "Musical Operations ",
      avatar: "https://fakeimg.pl/350x200/?text=Hello",
    },
    {
      id: "3",
      name: "Danaris Scguster",
      title: " Software producer",
      avatar: "https://fakeimg.pl/300/",
    },
  ]);
  const [showCard, setShowCard] = useState(false);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...cards];
    cardsCopy.splice(cardIndex, 1);
    console.log(cardsCopy);
    console.log("card" + cards);
    setCards(cardsCopy);
  };
  const classes = ["button"];
  if (cards.length < 3) classes.push(" pink");
  if (cards.length < 2) classes.push(" red");

  const changeNameHandler = (event, id) => {
    const cardIndex = cards.findIndex((card) => card.id === id);

    const cards_copy = [...cards];
    cards_copy[cardIndex].name = event.target.value;

    setCards(cards_copy);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="mango" checking={cards.length}>
          Presioname
        </Button>
        <button className={classes.join(" ")} onClick={toggleShowCard}>
          Toggle
        </button>
        {showCard &&
          cards.map((card, index) => (
            <Card
              key={card.id}
              name={card.name}
              title={card.title}
              avatar={card.avatar}
              onDelete={() => deleteCardHandler(index)}
              onChangeName={(event) => changeNameHandler(event, card.id)}
            />
          ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
