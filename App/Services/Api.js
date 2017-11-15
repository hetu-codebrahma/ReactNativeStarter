// @flow
import { create } from 'apisauce'
import config from '../Config/api'

type ApiResponse = {
  ok: boolean,
  problem: null | string,
  status?: number,
  headers?: Object,
  config?: Object,
  duration?: number,
  data?: Object,
}

type requestType = {
  setHeader: (string, string) => void,
  get: (string) => Promise<ApiResponse>,
  delete: (string) => Promise<ApiResponse>,
  post: (string, Object) => Promise<ApiResponse>,
  put: (string, Object) => Promise<ApiResponse>,
  patch: (string, Object) => Promise<ApiResponse>,
}

const request: requestType = create({
  baseURL: config.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

const Api = {
  setAuthToken: (token: string) => {
    request.setHeader('Authorization', `token ${token}`)
    return true
  },

  // Generic Get request
  getRequest: (url: string) => request.get(url),

  // App Requests
  // login: (email: string, password: string) => request.post('/auth/login/', { email, password })

}

export default Api
