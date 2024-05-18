import {notification} from 'antd'
import axios from 'axios'
import store from 'store'

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_TPADMIN_SERVICE_URL || window.config.gatewayApi,
    // timeout: 1000,
  })

export default apiClient
