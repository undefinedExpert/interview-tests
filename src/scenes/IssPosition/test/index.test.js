import React from 'react'
import IssPosition from '../index'
import {shallow} from 'enzyme'

jest.useFakeTimers();
describe('IssPosition', () => {
  let renderedComponent
  let props
  let updateIssGeoLocation

  beforeEach(() => {
    updateIssGeoLocation = jest.fn();
    IssPosition.prototype.updateIssGeoLocation = updateIssGeoLocation

    renderedComponent = shallow(<IssPosition {...props} />)
  })

  test('get iss geolocation place on componentDidMount', () => {
    expect(updateIssGeoLocation).toHaveBeenCalledTimes(1)
  })

  test('update geolocation for every 10sec', () => {
    jest.runOnlyPendingTimers();
    expect(updateIssGeoLocation).toHaveBeenCalledTimes(2)
  })

  test('display loading msg when we didn\'t loaded any data', () => {
    const expected = 'Loading satellite...'
    expect(renderedComponent.contains(expected)).toBeTruthy()
  })
})
