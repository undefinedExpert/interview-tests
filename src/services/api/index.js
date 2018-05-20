import axios from 'axios'
import config from './config'
import {isNull, omitBy} from 'lodash'

export const http = async (service, method, endpoint, options) => {
  const {url, key} = config[service]
  const params = options && options.params ? options.params : {}

  return await axios[method](
    `${url}${endpoint}`,
    {
      params: omitBy({
        key,
        ...params
      }, isNull),
      ...options
    }
  )
}