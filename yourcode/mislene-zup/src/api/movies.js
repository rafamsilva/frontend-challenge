import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  /* getDetailedByTitle (title) {
    return custAxios().get(`${Const.API_MOVIES}/t=${title}`)
  }, */
  getDetailedById (id) {
    return custAxios().get(`${Const.API_MOVIES}&i=${id}`)
  },
  getByTitle ({ title, type, year, page }) {
    const titleParam = type ? `&type=${type}` : ''
    const yearParam = year ? `&y=${year}` : ''
    return custAxios().get(`${Const.API_MOVIES}&s=${title}&page=${page}${titleParam}${yearParam}`)
  }
}
