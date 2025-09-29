import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', {
      url: error.config.url,
      status: error.response?.status,
      message: error.message,
      details: error.response?.data,
    })
    return Promise.reject(error)
  },
)

export default apiClient
