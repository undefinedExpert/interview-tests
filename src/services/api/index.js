import axios from 'axios'
import config from './config'

export const http = async (method, endpoint, options) => {
  const url = `${config.url}${endpoint}`
  await axios[method](url, {options})
}