import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetails from '../item-details/item-details';
import PeoplePage from '../people-page/people-page';
import StarshipsPage from '../starship-page/starship-page';
import PlanetsPage from '../planets-page/planets-page';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

export const RouteWithSubRoutes = ({
  path,
  children,
  component: Component,
  routes,
  getList,
  getItem,
  getImageUrl,
}) => (
  <Route
    path={path}
    render={props => (
      <Component
        {...props}
        getList={getList}
        getItem={getItem}
        getImageUrl={getImageUrl}
        routes={routes}>
        {children}
      </Component>
    )}
  />
);

export const routes = [
  {
    path: '/',
    component: () => <h2>Welcome to StarDB</h2>,
    exact: true,
  },
  {
    path: '/people',
    component: PeoplePage,
    getList: swapiService.getAllPeople,
    routes: [
      {
        path: '/people/:id',
        component: ItemDetails,
        getItem: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
      },
    ],
  },
  {
    path: '/planets',
    component: PlanetsPage,
    getList: swapiService.getAllPlanets,
    routes: [
      {
        path: '/planets/:id',
        component: ItemDetails,
        getItem: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage,
      },
    ],
  },
  {
    path: '/starships',
    component: StarshipsPage,
    getList: swapiService.getAllStarships,
    routes: [
      {
        path: '/starships/:id',
        component: ItemDetails,
        getItem: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage,
      },
    ],
  },
];
