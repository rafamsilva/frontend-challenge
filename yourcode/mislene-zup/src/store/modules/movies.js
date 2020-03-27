import moviesApi from '@/api/movies'

const actions = {
  actionGetDetailedById ({ _ }, id) {
    return moviesApi.getDetailedById(id)
      .then((response) => {
        return Promise.resolve(response.data)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  },
  actionGetByTitle ({ _ }, params) {
    return moviesApi.getByTitle(params)
      .then((response) => {
        return Promise.resolve(response)
      })
      .catch((e) => {
        return Promise.reject(e.response.data)
      })
  }
}

export default {
  actions
}
