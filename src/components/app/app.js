import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
// import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';

class App extends Component {
  swapiService = new SwapiService();

  state = {
    id: '5',
  };

  onItemSelected = (id) => {
    this.setState({
      id,
    });
  };

  render() {
    const { id } = this.state;
    const {
      getPerson, getPersonImage, getStarship, getStarshipImage,
    } = this.swapiService;
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            {/* <ItemList
              onItemSelected={this.onItemSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={item => item.name}
            /> */}
            <ItemDetails id={id} getData={getPerson} getImageUrl={item => getPersonImage(item)}>
              <Record label="Gender" field="gender" />
              <Record label="Birth Year" field="birthYear" />
              <Record label="Eye Color" field="eyeColor" />
            </ItemDetails>
          </div>
          <div className="col-md-6">
            <ItemDetails id={id} getData={getStarship} getImageUrl={item => getStarshipImage(item)}>
              <Record label="Model" field="model" />
              <Record label="Length" field="length" />
              <Record label="Cargo Capacity" field="cargoCapacity" />
            </ItemDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
