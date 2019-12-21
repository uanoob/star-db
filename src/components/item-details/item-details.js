import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './item-details.css';
import Spinner from '../spinner/spinner';

const ItemDetails = ({ getItem, getImageUrl, match, children }) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const { id } = match.params;
    getItem(id)
      .then(item => {
        setItem(item);
        setImage(getImageUrl(item));
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }, [getItem, getImageUrl, match.params]);

  return loading ? (
    <Spinner />
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
