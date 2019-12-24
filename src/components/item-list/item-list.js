import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';
import ItemView from './item-view';
import './item-list.css';

const ItemList = ({ getList }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getList()
      .then(data => {
        setItemList(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  }, [getList]);

  return loading ? (
    <Spinner />
  ) : error ? (
    <ErrorIndicator />
  ) : (
    <ul className='item-list list-group'>
      {itemList.map(item => (
        <ItemView key={item.id} item={item} />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  getList: PropTypes.func.isRequired,
};

export default ItemList;
