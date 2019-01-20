import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from '../spinner/spinner';
import RandomPlanetView from './random-planet-view';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 15 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    const { planet, loading } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        {loading ? <Spinner /> : <RandomPlanetView planet={planet} />}
      </div>
    );
  }
}
