import axios, { AxiosError, AxiosInstance } from 'axios'
import {
  clearLocalStorage,
  getAccessTokenFromLocalStorage,
  setAccessTokenLocalToStorage,
  setProfileLocalStorage
} from './auth'
import { AUTH } from '~/constants/auth.constant'

class Http {
  instance: AxiosInstance
  private access_token: string

  constructor() {
    this.access_token = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/api/v1/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Request
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.Authorization = this.access_token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Response
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === AUTH.LOGIN) {
          const data = response.data as AuthResponse
          const profile = data.data.user
          this.access_token = data.data.access_token

          setAccessTokenLocalToStorage(this.access_token)
          setProfileLocalStorage(profile)
        } else if (url === AUTH.LOGOUT) {
          this.access_token = ''
          clearLocalStorage()
        }
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
