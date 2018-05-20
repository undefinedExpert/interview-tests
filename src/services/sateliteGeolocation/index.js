import * as api from './api'
export const satellite = async (id) => {
  const { data } = await api.satellite(id)
  return data
}

export const geocodeFromSatelliteId = async (id) => {
  const { latitude, longitude } = await satellite(id)

  const { status, data: { results } } = await api.humanReadablePositionOfSatellite(latitude, longitude)
  if (status === 'OVER_QUERY_LIMIT') {
    return {data: []}
  }

  return results
}

export const currentIssGeolocation = async () => {
  const issId = 25544;
  return await geocodeFromSatelliteId(issId)
}

export const formattedIssGeolocationPosition = async () =>{
  const currentIssPosition = await currentIssGeolocation()
  return currentIssPosition.length ? currentIssPosition[0].formatted_address : null
}