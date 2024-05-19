import axios from 'axios'
import store from 'store'

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_TPADMIN_SERVICE_URL || 'http://localhost:3000',
    // timeout: 1000,
  })

export default apiClient
