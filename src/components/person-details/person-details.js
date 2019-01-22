import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorButton from '../error-button/error-button';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (id !== prevProps.id) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { id } = this.props;
    if (!id) {
      return;
    }
    this.swapiService
      .getPerson(id)
      .then((person) => {
        this.setState({
          person,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { person, loading } = this.state;
    return (
      <ErrorBoundry>
        {loading ? <Spinner /> : null}
        {person ? (
          <div className="person-details card">
            <img
              className="person-image"
              src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
              alt={person.name}
            />

            <div className="card-body">
              <h4>{person.name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Gender</span>
                  <span>{person.gender}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Birth Year</span>
                  <span>{person.birthYear}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Eye Color</span>
                  <span>{person.eyeColor}</span>
                </li>
              </ul>
              <ErrorButton />
            </div>
          </div>
        ) : null}
      </ErrorBoundry>
    );
  }
}

PersonDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PersonDetails;
