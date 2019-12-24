import React, { useState, useEffect, useContext } from 'react';
import SwapiServiceContext from '../swapi-service-context';
import Spinner from '../spinner/spinner';
import RandomPlanetView from './random-planet-view';
import ErrorIndicator from '../error-indicator/error-indicator';
import './random-planet.css';

const RandomPlanet = () => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const swapiService = useContext(SwapiServiceContext);

  useEffect(() => {
    const id = Math.floor(Math.random() * 25) + 2;
    swapiService
      .getPlanet(id)
      .then(planet => {
        setPlanet(planet);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(true);
      });
  }, [swapiService]);

  return (
    <div className='random-planet jumbotron rounded'>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        <RandomPlanetView planet={planet} />
      )}
    </div>
  );
};

export default RandomPlanet;
