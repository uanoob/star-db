import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';

const StarshipPage = ({
  getData, id, onItemSelected, getStarship, getStarshipImage,
}) => (
  <div className="row mb2">
    <div className="col-md-6">
      <ItemList onItemSelected={onItemSelected} getData={getData} renderItem={item => item.name} />
    </div>
    <div className="col-md-6">
      <ItemDetails id={id} getData={getStarship} getImageUrl={item => getStarshipImage(item)}>
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cargo Capacity" field="cargoCapacity" />
      </ItemDetails>
    </div>
  </div>
);

StarshipPage.propTypes = {
  getData: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  getStarship: PropTypes.func.isRequired,
  getStarshipImage: PropTypes.func.isRequired,
};

export default StarshipPage;
