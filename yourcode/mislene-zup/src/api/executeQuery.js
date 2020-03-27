import Const from '@/helpers/const'
import { custAxios } from './genericApi'

export default {
  executeQuery (body) {
    return custAxios().post(`${Const.API_EXECUTE_QUERY}`, body)
  }
}
