import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import Record from '../record/record';
import { RouteWithSubRoutes } from '../routes';

const PlanetsPage = ({ routes, getList }) => (
  <div className='row mb2'>
    <div className='col-md-6'>
      <ItemList getList={getList} />
    </div>
    <div className='col-md-6'>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route}>
          <Record label='Diameter' field='diameter' />
          <Record label='Rotation Period' field='rotationPeriod' />
          <Record label='Population' field='population' />
        </RouteWithSubRoutes>
      ))}
    </div>
  </div>
);

PlanetsPage.propTypes = {
  routes: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
};

export default PlanetsPage;
