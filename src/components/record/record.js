import React from 'react';
import PropTypes from 'prop-types';

const Record = ({ item, label, field }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

Record.defaultProps = {
  item: {},
};

Record.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  item: PropTypes.shape({
    gender: PropTypes.string,
    birthYear: PropTypes.string,
    eyeColor: PropTypes.string,
    model: PropTypes.string,
    length: PropTypes.string,
    cargoCapacity: PropTypes.string,
  }),
};

export default Record;
