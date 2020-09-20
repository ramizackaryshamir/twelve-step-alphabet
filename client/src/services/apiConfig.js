import axios from 'axios'

const baseURL = 'https://twelve-step-alphabet-api.herokuapp.com/'

const api = axios.create({
  baseURL: baseURL
})

export default api;