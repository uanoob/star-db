import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import Record from '../record/record';
import { RouteWithSubRoutes } from '../routes';

const StarshipPage = ({ routes, getList }) => (
  <div className='row mb2'>
    <div className='col-md-6'>
      <ItemList getList={getList} />
    </div>
    <div className='col-md-6'>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route}>
          <Record label='Model' field='model' />
          <Record label='Length' field='length' />
          <Record label='Cargo Capacity' field='cargoCapacity' />
        </RouteWithSubRoutes>
      ))}
    </div>
  </div>
);

StarshipPage.propTypes = {
  routes: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
};

export default StarshipPage;
