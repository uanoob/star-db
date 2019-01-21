import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import ItemView from './item-view';

class ItemList extends Component {
  SwapiService = new SwapiService();

  state = {
    people: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.getAllPerson();
  }

  onPeopleLoaded = (people) => {
    this.setState({
      people,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  getAllPerson = () => {
    this.SwapiService.getAllPeople()
      .then((person) => {
        this.onPeopleLoaded(person);
      })
      .catch(() => {
        this.onError();
      });
  };

  renderItems = (arr) => {
    const { onItemSelected } = this.props;
    return (
      <ul className="item-list list-group">
        {arr.map(person => (
          <ItemView key={person.id} person={person} onItemSelected={onItemSelected} />
        ))}
      </ul>
    );
  };

  render() {
    const { people, loading, error } = this.state;

    return (
      <Fragment>
        {loading ? <Spinner /> : null}
        {error ? <ErrorIndicator /> : null}
        {!(loading && error) ? this.renderItems(people) : null}
      </Fragment>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemList;
