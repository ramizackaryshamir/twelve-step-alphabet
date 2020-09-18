import axios from 'axios'

const baseURL = process.env.NODE_ENV === production ? 'https ://twelve-step-alphabet-api.herokuapp.com/' : 'http://localhost:300'

const api = axios.create({
  baserURL: baseURL
})

export api;