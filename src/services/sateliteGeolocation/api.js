import { http} from 'services/api';


const endPoints = {
  satellites: () => `/satellites`,
  satellite: (id) => `/satellites/${id}`,
  positions: (id) => `/satellites/${id}/positions`,
  tles: (id) => `/satellites/${id}/tles`,
  coordinates: (lat, ion) => `/coordinates/${lat},${ion}`,
};

export const satellites = () => http('get', endPoints.satellites())
export const satellite = (id) => http('get', endPoints.satellite(id))
export const positions = (id) => http('get', endPoints.positions(id))

