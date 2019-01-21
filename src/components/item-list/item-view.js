import React from 'react';
import PropTypes from 'prop-types';

const ItemView = ({ person, onItemSelected }) => (
  <li key={person.id}>
    <span
      className="list-group-item"
      role="button"
      tabIndex="0"
      onClick={() => onItemSelected(person.id)}
      onKeyDown={() => onItemSelected(person.id)}
    >
      {person.name}
    </span>
  </li>
);

ItemView.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired,
  }).isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemView;
