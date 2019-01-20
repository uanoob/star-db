import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RandomPlanetView = ({
  planet: {
    id, name, population, rotationPeriod, diameter,
  },
}) => (
  <Fragment>
    <img
      className="planet-image"
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      alt="random planet"
    />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </Fragment>
);

RandomPlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotationPeriod: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
  }).isRequired,
};

export default RandomPlanetView;
