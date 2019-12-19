import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import Spinner from '../spinner/spinner';
import ItemView from './item-view';

const ItemList = ({ onItemSelected, renderItem, getData }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(data => {
        setItemList(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [getData, itemList]);

  const renderItems = arr => (
    <ul className='item-list list-group'>
      {arr.map(item => (
        <ItemView
          key={item.id}
          item={item}
          renderItem={renderItem}
          onItemSelected={onItemSelected}
        />
      ))}
    </ul>
  );

  return loading ? <Spinner /> : renderItems(itemList);
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ItemList;
