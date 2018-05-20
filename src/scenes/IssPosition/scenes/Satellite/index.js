import React from 'react';
import PropTypes from 'prop-types'
import shortId from 'shortid'

const Satellite = ({satellite}) => (
  <div>
    {
      Object.keys(satellite).map((key) => (
        <div key={shortId()}>
          {key}: {satellite[key]}
        </div>
      ))
    }
  </div>
)

Satellite.propTypes = {
  satellite: PropTypes.shape({
    "name": PropTypes.string,
    "id": PropTypes.number,
    "latitude": PropTypes.number,
    "longitude": PropTypes.number,
    "altitude": PropTypes.number,
    "velocity": PropTypes.number,
    "visibility": PropTypes.string,
    "footprint": PropTypes.number,
    "timestamp": PropTypes.number,
    "daynum": PropTypes.number,
    "solar_lat": PropTypes.number,
    "solar_lon": PropTypes.number,
    "units": PropTypes.string
  })
}

export default Satellite
