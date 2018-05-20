import { http} from 'services/api';


const endPoints = {
  satellites: () => `/satellites`,
  satellite: (id) => `/satellites/${id}`,
  geocode: () => `/geocode/json`,
};

export const satellites = () =>
  http('iss', 'get', endPoints.satellites())

export const satellite = (id) =>
  http('iss', 'get', endPoints.satellite(id))

export const humanReadablePositionOfSatellite = (lat, lng) =>
  http('gmaps', 'get', endPoints.geocode(), { params: { latlng: `${lat},${lng}`} })

