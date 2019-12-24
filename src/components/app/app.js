import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import SwapiServiceContext from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import { routes, RouteWithSubRoutes } from '../routes';

const App = () => (
  <Router>
    <SwapiServiceContext.Provider value={SwapiService}>
      <Header />
      <RandomPlanet />
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
        <Redirect to='/' />
      </Switch>
    </SwapiServiceContext.Provider>
  </Router>
);

export default App;
