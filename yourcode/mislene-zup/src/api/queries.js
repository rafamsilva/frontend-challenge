import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  getQueries () {
    return custAxios().get(`${Const.API_QUERIES}`)
  },
  getQuery (id) {
    return custAxios().get(`${Const.API_QUERIES}/${id}`)
  },
  saveQuery (body) {
    return custAxios().post(`${Const.API_QUERIES}`, body)
  },
  putQuery (id, body) {
    return custAxios().put(`${Const.API_QUERIES}/${id}`, body)
  },
  deleteQuery (id) {
    return custAxios().delete(`${Const.API_QUERIES}/${id}`)
  }
}
