import React, {  Component } from 'react';
import './styles/Custom.css';
import Card from './components/Card';
import { ThemeProvider } from 'styled-components'
import Button from './elemnt/Button'
const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

class App extends Component {
  // console.log('App js constructor')
  constructor(props) {
    super(props);
    console.log('App js constructor')
    this.state = {
      cards: [
        {
          id: 'asdfsafsdf',
          name: 'Damaris Schuster',
          title: 'International Operations Producer',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/karthipanraj/128.jpg'
        },
        {
          id: 'gfhdfhg',
          name: 'Bartholome Dietrich',
          title: 'Future Security Developer',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cicerobr/128.jpg'
        },
        {
          id: 'tbdfghfghf',
          name: 'Pattie Miller',
          title: 'Forward Metrics AnalystChange Name',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/illyzoren/128.jpg'
        }
      ],
      showCard: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App js getDerivedStateFromProps')
    return state
  }
  componentDidMount() {
    console.log('App js componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('App js Should component update')
  //   return true
  // }

  toggleShowCard = () => {
    console.log('this.state', this.state)
    this.setState({
      showCard: !this.state.showCard
    })
  }
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    cards_copy.splice(cardIndex, 1)
    console.log('cards_copy', cards_copy)
    console.log('cards', this.state.cards)
    this.setState({
      cards: cards_copy
    })
  }
  changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = this.state.cards.findIndex(card => card.id === id)
    //2. make a copy of the cards
    const cards_copy = [...this.state.cards]
    //3. change the name of the specific card
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    this.setState({
      cards: cards_copy
    })
  }
  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // componentWillUnmount() {
  //   console.log('Appjs component will unmount')
  // }

  render() {
    if (this.state.showCard === false) {
      return <div>nothing</div>
    }
    console.log('App js render')
    const classes = ['button']
    if (this.state.cards.length < 3) classes.push('pink')
    if (this.state.cards.length < 2) classes.push('red text');
    const cardsMarkup = this.state.showCard && (
      this.state.cards.map((card, index) => <Card
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        key={card.id}
        onDelete={() => this.deleteCardHandler(index)}
        onChangeName={(event) => this.changeNameHandler(event, card.id)}
      />)
    )

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length} onClick={this.toggleShowCard}>Toggle</Button>
          <button className={classes.join(' ')} onClick={this.toggleShowCard}>Toggle show/hide</button>
          {cardsMarkup}
        </div>
      </ThemeProvider>
    );
  }

}

export default App;
