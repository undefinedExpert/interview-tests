import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Headline from 'components/Headline'
import {isNull} from 'lodash'
import LastKnownPosition from './scenes/LastKnownPosition'
import CurrentPosition from './scenes/CurrentPosition'

const Position = ({formattedPosition}) => {
  return (
    <Headline>
      <LastKnownPosition formattedPosition={formattedPosition} />
      <CurrentPosition formattedPosition={formattedPosition} />
    </Headline>
  )
}

Position.propTypes = {
  formattedPosition: PropTypes.string
}

export default Position
