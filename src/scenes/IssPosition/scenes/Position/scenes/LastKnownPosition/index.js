import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {isNull} from 'lodash'

class LastKnownPosition extends Component {
  state = {
    lastKnownPosition: null
  }

  static getDerivedStateFromProps ({formattedPosition}, prevState) {
    const isPositionDifferFromLastKnown = formattedPosition !== prevState.lastKnownPosition
    const isPositionProvided = !isNull(formattedPosition)

    if (isPositionDifferFromLastKnown && isPositionProvided) {
      return { lastKnownPosition: formattedPosition }
    }

    return prevState
  }

  isLastPositionDiscovered = lastKnownPosition => (
    !lastKnownPosition ? msgs.lastPositionNotDiscoveredYet() : null
  )

  render() {
    const { lastKnownPosition } = this.state
    const { formattedPosition } = this.props
    const isCurrentPositionUnknown = isNull(formattedPosition)
    const isLastPositionAvailable = !isNull(lastKnownPosition)

    return isCurrentPositionUnknown && isLastPositionAvailable
              ? msgs.lastKnownPosition(lastKnownPosition)
              : this.isLastPositionDiscovered(lastKnownPosition)
  }
}

export const msgs = {
  lastKnownPosition: (lastKnownPosition) => `Last known position is: ${lastKnownPosition}`,
  lastPositionNotDiscoveredYet: () => 'Position is unknown, please wait.',
}

LastKnownPosition.propTypes = {
  formattedPosition: PropTypes.string
}

export default LastKnownPosition
