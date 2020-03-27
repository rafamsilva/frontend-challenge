import axios from 'axios'

export const custAxios = () => {
  const instance = axios.create()
  return instance
}
