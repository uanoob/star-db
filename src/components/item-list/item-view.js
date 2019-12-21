import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

const ItemView = ({ item: { id, name }, match }) => (
  <li key={id}>
    <Link to={`${match.path}/${id}`}>
      <span className='list-group-item' role='button' tabIndex='0'>
        {name}
      </span>
    </Link>
  </li>
);

ItemView.defaultProps = {
  id: '',
  name: '',
};

ItemView.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default withRouter(ItemView);
