import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';
import './item-details.css';

const ItemDetails = ({ getItem, getImageUrl, match, children }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [image, setImage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const { id } = match.params;
    setLoading(true);
    getItem(id)
      .then(item => {
        setItem(item);
        setImage(getImageUrl(item));
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [getItem, getImageUrl, match.params]);

  return loading ? (
    <Spinner />
  ) : error ? (
    <ErrorIndicator />
  ) : (
    <div className='person-details card'>
      <img className='person-image' src={image} alt={item.name} />
      <div className='card-body'>
        <h4>{item.name}</h4>
        <ul className='list-group list-group-flush'>
          {React.Children.map(children, child =>
            React.cloneElement(child, { item }),
          )}
        </ul>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  getItem: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemDetails;
