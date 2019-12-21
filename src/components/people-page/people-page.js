import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list/item-list';
import Record from '../record/record';
import { RouteWithSubRoutes } from '../routes';

const PeoplePage = ({ routes, getList }) => (
  <div className='row mb2'>
    <div className='col-md-6'>
      <ItemList getList={getList} />
    </div>
    <div className='col-md-6'>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route}>
          <Record label='Gender' field='gender' />
          <Record label='Birth Year' field='birthYear' />
          <Record label='Eye Color' field='eyeColor' />
        </RouteWithSubRoutes>
      ))}
    </div>
  </div>
);

PeoplePage.propTypes = {
  routes: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
};

export default PeoplePage;
