import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import * as swapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

const PeoplePage = lazy(() => import('../people-page/people-page'));
const PlanetsPage = lazy(() => import('../planets-page/planets-page'));
const StarshipsPage = lazy(() => import('../starship-page/starship-page'));
const ItemDetails = lazy(() => import('../item-details/item-details'));

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
      <Suspense fallback={<Spinner />}>
        <Component
          {...props}
          getList={getList}
          getItem={getItem}
          getImageUrl={getImageUrl}
          routes={routes}>
          {children}
        </Component>
      </Suspense>
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
