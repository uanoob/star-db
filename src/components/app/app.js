import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

class App extends Component {
  state = {
    selected: null,
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
            <ItemList onItemSelected={this.onItemSelected} />
          </div>
          <div className="col-md-6">{selected ? <PersonDetails id={selected} /> : null}</div>
        </div>
      </div>
    );
  }
}

export default App;
