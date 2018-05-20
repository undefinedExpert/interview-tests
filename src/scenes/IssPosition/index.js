import React, { Component } from 'react';
import { formattedIssGeolocationPosition } from 'services/sateliteGeolocation'
import {isNull} from 'lodash'
import Position from "./scenes/Position";

class IssPosition extends Component {
  constructor() {
    super()
    this.state = {
      position: null,
      interval: null,
      isLoaded: false
    }

    this.updateIssGeoLocation = this.updateIssGeoLocation.bind(this)
  }

  componentDidMount() {
    this.updateIssGeoLocation()
    this.runIssGeoLocationUpdater()
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  updateIssGeoLocation() {
    formattedIssGeolocationPosition()
      .then(position => this.setState({position, isLoaded: true}))
  }

  runIssGeoLocationUpdater() {
    const interval = setInterval(this.updateIssGeoLocation, 10000);
    this.setState({interval})
  }

  render() {
    const { position, isLoaded } = this.state
    return (
      <div>
        {isNull(position) && !isLoaded
            ? 'Loading satellite...'
            : (
          <Position formattedPosition={position} />
        )}
      </div>
    );
  }
}

export default IssPosition;
