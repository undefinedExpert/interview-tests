import React from 'react'
import LastKnownPosition from '../index'
import {shallow} from 'enzyme'

describe('LastKnownPosition', () => {
  let renderedComponent
  let props
  beforeEach(() => {
    props = {
      formattedPosition: null
    }
    renderedComponent = shallow(<LastKnownPosition {...props} />)
  })

  test('Return last known position', () => {
    const expectedMsg = `Last known position is: Poland`
    renderedComponent.setProps({formattedPosition: 'Poland'})
    renderedComponent.setProps({formattedPosition: null})
    expect(renderedComponent.contains(expectedMsg)).toBeTruthy()
  })

  test('Return initially unknown position', () => {
    const expectedMsg = `Position is unknown, please wait.`
    expect(renderedComponent.contains(expectedMsg)).toBeTruthy()
  })

  test('Update initially unknown position with a new one', () => {
    renderedComponent.setProps({formattedPosition: 'Poland'})
    renderedComponent.setProps({formattedPosition: null})
    const expectedMsg = `Last known position is: Poland`
    expect(renderedComponent.contains(expectedMsg)).toBeTruthy()
  })

  test('Render nothing when we discovered position but formattedPosition was provided', () => {
    renderedComponent.setProps({formattedPosition: 'Poland'})
    expect(renderedComponent.type()).toBeNull()
  })
})
