import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {
  render() {
    return <div>Loading...</div>
  }
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired
};