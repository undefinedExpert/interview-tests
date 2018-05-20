import React from 'react'
import CurrentPosition from '../index'
import {shallow} from 'enzyme'

describe('CurrentPosition', () => {
  let renderedComponent
  let props
  beforeEach(() => {
    props = {
      formattedPosition: null
    }
    renderedComponent = shallow(<CurrentPosition {...props} />)
  })

  test('Return nothing when position is null', () => {
    expect(renderedComponent.type()).toBeNull()
  })

  test('Render current position', () => {
    renderedComponent.setProps({formattedPosition: 'Poland'})
    const expectedMsg = 'Current position of ISS Satellite is: Poland'
    expect(renderedComponent.contains(expectedMsg)).toBeTruthy()
  })
})
