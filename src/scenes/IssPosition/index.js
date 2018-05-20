import React, { Component } from 'react';
import { satellite } from 'servicges/sateliteGeolocation'
import Satellite from "./scenes/Satellite"

class IssPosition extends Component {
  state = {
    satellite: null
  }
  componentDidMount() {
    satellite(25544)
      .then(satellite => this.setState({satellite}))

  }
  render() {
    const { satellite } = this.state
    return (
      <div>
        {satellite ? <Satellite satellite={satellite} /> : 'Loading satellite...'}
      </div>
    );
  }
}

export default IssPosition;
