import React, { Component, Fragment, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import SwapiServiceContext from '../swapi-service-context/swapi-service-context';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
const PeoplePage = lazy(() => import('../people-page/people-page'));
const StarshipsPage = lazy(() => import('../starship-page/starship-page'));
const PlanetsPage = lazy(() => import('../planets-page/planets-page'));

class App extends Component {
  swapiService = new SwapiService();

  state = {
    id: '5',
  };

  onItemSelected = (id) => {
    this.setState({
      id,
    });
  };

  render() {
    const { id } = this.state;
    const {
      getStarship,
      getStarshipImage,
      getPlanet,
      getPlanetImage,
    } = this.swapiService;
    return (
      <SwapiServiceContext.Provider value={this.swapiService}>
        <Router>
          <Fragment>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
              <Route
                path="/people"
                render={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PeoplePage
                      id={id}
                      onItemSelected={this.onItemSelected}
                    />
                  </Suspense>
                )}
              />
              <Route
                path="/starships"
                render={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <StarshipsPage
                      id={id}
                      onItemSelected={this.onItemSelected}
                      getStarship={getStarship}
                      getStarshipImage={getStarshipImage}
                      getData={this.swapiService.getAllStarships}
                    />
                  </Suspense>
                )}
              />
              <Route
                path="/planets"
                render={() => (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PlanetsPage
                      id={id}
                      onItemSelected={this.onItemSelected}
                      getPlanet={getPlanet}
                      getPlanetImage={getPlanetImage}
                      getData={this.swapiService.getAllPlanets}
                    />
                  </Suspense>
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Fragment>
        </Router>
      </SwapiServiceContext.Provider>
    );
  }
}

export default App;
