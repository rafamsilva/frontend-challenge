const API_HOST = () => {
  const { host } = window.location
  if (host.includes('localhost')) {
    return 'http://www.omdbapi.com/?apikey=bf660cdf'
  }
  return 'http://www.omdbapi.com/?apikey=bf660cdf'
}

const API_URL_AUTH = `https://hlg-api-client.safea.grupoa.education/v1`
const API_URL = `${API_HOST()}`
const API_USER = `${API_URL_AUTH}/user`
const API_QUERIES = `${API_URL}/query`
const API_DATABASES = `${API_URL}/database`
const API_EXECUTE_QUERY = `${API_URL}/execute`
const API_MOVIES = `${API_URL}`

export default {
  API_HOST,
  API_URL,
  API_URL_AUTH,
  API_USER,
  API_QUERIES,
  API_DATABASES,
  API_EXECUTE_QUERY,
  API_MOVIES
}
