import React from 'react';
import PropTypes from 'prop-types';

const ItemView = ({ item, renderItem, onItemSelected }) => {
  const label = renderItem(item);
  return (
    <li key={item.id}>
      <span
        className="list-group-item"
        role="button"
        tabIndex="0"
        onClick={() => onItemSelected(item.id)}
        onKeyDown={() => onItemSelected(item.id)}
      >
        {label}
      </span>
    </li>
  );
};

ItemView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ItemView;
