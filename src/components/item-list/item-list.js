import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import Spinner from '../spinner/spinner';
import ItemView from './item-view';

const ItemList = ({ getList }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList()
      .then(data => {
        setItemList(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [getList]);

  return loading ? (
    <Spinner />
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
