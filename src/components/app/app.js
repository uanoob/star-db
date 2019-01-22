import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

class App extends Component {
  swapiService = new SwapiService();

  state = {
    selected: '3',
  };

  onItemSelected = (id) => {
    this.setState({
      selected: id,
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={item => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails id={selected} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
