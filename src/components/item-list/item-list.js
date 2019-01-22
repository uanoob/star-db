import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item-list.css';
import Spinner from '../spinner/spinner';
import ItemView from './item-view';
import ErrorBoundry from '../error-boundry/error-boundry';
import ErrorButton from '../error-button/error-button';

class ItemList extends Component {
  state = {
    itemList: [],
    loading: true,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderItems = (arr) => {
    const { onItemSelected, renderItem } = this.props;
    return (
      <ul className="item-list list-group">
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
  };

  render() {
    const { itemList, loading } = this.state;

    return (
      <ErrorBoundry>
        {loading ? <Spinner /> : null}
        {!loading ? this.renderItems(itemList) : null}
        <ErrorButton />
      </ErrorBoundry>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ItemList;
