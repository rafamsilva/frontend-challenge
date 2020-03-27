import axios from 'axios'
import Const from '@/helpers/const'

export default {
  signIn (username, password, applicationAlias) {
    return axios.post(`${Const.API_URL_AUTH}/auth/signin/operations`, {
      username,
      password,
      applicationAlias
    }, { headers: { 'x-api-key': 'RBETS8UHfq3Sw8sB4HZtA9WSV3t639lIaVuuQ8vP' } })
  }
}
