import * as api from './api'
// TODO:
// Get current iss position
// Get current satellite position
export const satellites = () => api.satellites()

export const satellite = async (id) => {
  const { data } = await api.satellite(id)
  return data
}
