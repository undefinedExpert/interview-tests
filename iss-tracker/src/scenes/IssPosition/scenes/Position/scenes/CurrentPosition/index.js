import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Headline from 'components/Headline'
import {isNull} from 'lodash'


const CurrentPosition = ({formattedPosition}) => (
  formattedPosition ? `Current position of ISS Satellite is: ${formattedPosition}` : null
)

CurrentPosition.propTypes = {
  formattedPosition: PropTypes.string
}

export default CurrentPosition
