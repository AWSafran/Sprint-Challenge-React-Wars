import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getSpecies(character){
    //console.log('checking species');
    fetch(character.species[0])
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data.name);
        character.speciesPlaintext = data.name;
        //console.log(character.speciesPlaintext);
      })
      .catch(err =>{
        throw new Error(err);
      })
      return character;
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const speciesIncluded = data.results.map(character => this.getSpecies(character));
        //console.log(speciesIncluded);
        this.setState({ starwarsChars: speciesIncluded });
        console.log(this.state.starwarsChars);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CardList 
          cards={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
