import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';
import SwapiServiceContext from '../swapi-service-context';

const PlanetsPage = ({ id, onItemSelected }) => {
  const { getAllPlanets, getPlanet, getPlanetImage } = useContext(
    SwapiServiceContext,
  );
  return (
    <div className='row mb2'>
      <div className='col-md-6'>
        <ItemList
          onItemSelected={onItemSelected}
          getData={getAllPlanets}
          renderItem={item => item.name}
        />
      </div>
      <div className='col-md-6'>
        <ItemDetails
          id={id}
          getData={getPlanet}
          getImageUrl={item => getPlanetImage(item)}>
          <Record label='Diameter' field='diameter' />
          <Record label='Rotation Period' field='rotationPeriod' />
          <Record label='Population' field='population' />
        </ItemDetails>
      </div>
    </div>
  );
};

PlanetsPage.propTypes = {
  id: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default PlanetsPage;
