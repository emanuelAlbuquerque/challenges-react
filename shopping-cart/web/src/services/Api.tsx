import axios from 'axios'

const axiosIntance = axios.create({
  baseURL: 'http://localhost:3333'
})

export default axiosIntance
