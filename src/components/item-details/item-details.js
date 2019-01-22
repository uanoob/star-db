import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item-details.css';
// import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorButton from '../error-button/error-button';

class ItemDetails extends Component {
  // swapiService = new SwapiService();

  state = {
    item: null,
    image: '',
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
    const { id, getData, getImageUrl } = this.props;
    if (!id) {
      return;
    }
    getData(id)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { item, image, loading } = this.state;
    const { children } = this.props;
    return (
      <ErrorBoundry>
        {loading ? <Spinner /> : null}
        {item ? (
          <div className="person-details card">
            <img className="person-image" src={image} alt={item.name} />

            <div className="card-body">
              <h4>{item.name}</h4>
              <ul className="list-group list-group-flush">
                {React.Children.map(children, child => React.cloneElement(child, { item }))}
              </ul>
              <ErrorButton />
            </div>
          </div>
        ) : null}
      </ErrorBoundry>
    );
  }
}

ItemDetails.propTypes = {
  id: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemDetails;
