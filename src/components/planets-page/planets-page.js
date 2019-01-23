import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';

const PlanetsPage = ({
  getData, id, onItemSelected, getPlanet, getPlanetImage,
}) => (
  <div className="row mb2">
    <div className="col-md-6">
      <ItemList onItemSelected={onItemSelected} getData={getData} renderItem={item => item.name} />
    </div>
    <div className="col-md-6">
      <ItemDetails id={id} getData={getPlanet} getImageUrl={item => getPlanetImage(item)}>
        <Record label="Diameter" field="diameter" />
        <Record label="Rotation Period" field="rotationPeriod" />
        <Record label="Population" field="population" />
      </ItemDetails>
    </div>
  </div>
);

PlanetsPage.propTypes = {
  getData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  getPlanet: PropTypes.func.isRequired,
  getPlanetImage: PropTypes.func.isRequired,
};

export default PlanetsPage;
