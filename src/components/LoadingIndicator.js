import React from 'react';
import PropTypes from 'prop-types';

export default class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading
    }
  }

  componentDidMount() {
    this.delayTimer = setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <div>Loading...</div>
    }
    return this.props.children
  }
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired
};