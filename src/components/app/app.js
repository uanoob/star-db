import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import { routes, RouteWithSubRoutes } from '../routes';

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <RandomPlanet />
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
        <Redirect to='/' />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
