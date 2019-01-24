import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import StarshipsPage from '../starship-page/starship-page';
import PlanetsPage from '../planets-page/planets-page';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

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
      getPerson,
      getPersonImage,
      getStarship,
      getStarshipImage,
      getPlanet,
      getPlanetImage,
    } = this.swapiService;
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <Fragment>
            <Header />
            <RandomPlanet />
            <Switch>
              <Route exact path="/" render={() => <h2>Welcome to StarDB</h2>} />
              <Route
                path="/people"
                render={() => (
                  <PeoplePage
                    id={id}
                    onItemSelected={this.onItemSelected}
                    getPerson={getPerson}
                    getPersonImage={getPersonImage}
                    getData={this.swapiService.getAllPeople}
                  />
                )}
              />
              <Route
                path="/starships"
                render={() => (
                  <StarshipsPage
                    id={id}
                    onItemSelected={this.onItemSelected}
                    getStarship={getStarship}
                    getStarshipImage={getStarshipImage}
                    getData={this.swapiService.getAllStarships}
                  />
                )}
              />
              <Route
                path="/planets"
                render={() => (
                  <PlanetsPage
                    id={id}
                    onItemSelected={this.onItemSelected}
                    getPlanet={getPlanet}
                    getPlanetImage={getPlanetImage}
                    getData={this.swapiService.getAllPlanets}
                  />
                )}
              />
              <Redirect to="/" />
            </Switch>
          </Fragment>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
