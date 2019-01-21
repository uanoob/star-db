import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from '../spinner/spinner';
import RandomPlanetView from './random-planet-view';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    // this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        {!(loading || error) ? <RandomPlanetView planet={planet} /> : null}
        {loading ? <Spinner /> : null}
        {error ? <ErrorIndicator /> : null}
      </div>
    );
  }
}
