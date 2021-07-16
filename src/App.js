import Card from "./components/Card";
import React, { useState } from "react";
// import faker from "faker";
import "./styles/Custom.css";

function App() {
  const [cards, setCards] = useState([
{
  name:'Danaris Scguster',
  title: "International Operations producer",
  avatar:"https://cdn.fakercloud.com/avatars/millinet_128.jpg"

},
{
  name:'Carlos  Damian',
  title: "Musical Operations ",
  avatar:"https://fakeimg.pl/350x200/?text=Hello"

},
{
  name:'Danaris Scguster',
  title: " Software producer",
  avatar:"https://fakeimg.pl/300/"

},

  ]);
  const [showCard, setShowCard] = useState(false);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) =>{
    const cardsCopy = [...cards]
    cardsCopy.splice(cardIndex,1)
    console.log(cardsCopy)
    console.log('card' +cards)
    setCards(cardsCopy)
  }

  return (
    <div className="App">
      <button className="button" onClick={toggleShowCard}>
        Toggle
      </button>
      {showCard &&
        cards.map((card,index) => (
          <Card key={index}
            name={card.name}
            title={card.title}
            avatar={card.avatar}
            onDelete={() =>deleteCardHandler(index)}
          />
        ))}
    </div>
  );
}

export default App;
