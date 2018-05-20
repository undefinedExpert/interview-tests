import { http} from 'services/api';
import apiConfig from 'services/api/config';


const endPoints = {
  satellites: () => `/satellites`,
  satellite: (id) => `/satellites/${id}`,
  positions: (id) => `/satellites/${id}/positions`,
  tles: (id) => `/satellites/${id}/tles`,
  coordinates: (lat, ion) => `/coordinates/${lat},${ion}`,
};

const issHardcodedId = '25544'