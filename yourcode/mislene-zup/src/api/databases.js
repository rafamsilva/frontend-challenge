import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  getDatabases () {
    return custAxios().get(`${Const.API_DATABASES}`)
  },
  getDatabase (id) {
    return custAxios().get(`${Const.API_DATABASES}/${id}`)
  },
  saveDatabase (body) {
    return custAxios().post(`${Const.API_DATABASES}`, body)
  },
  putDatabase (id, body) {
    return custAxios().put(`${Const.API_DATABASES}/${id}`, body)
  },
  deleteDatabase (id) {
    return custAxios().delete(`${Const.API_DATABASES}/${id}`)
  }
}
