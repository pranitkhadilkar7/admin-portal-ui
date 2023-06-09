import axios from "axios"

const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT

export const urlBase = `http://${host}:${port}`

export const httpInstance = axios.create({
  baseURL: urlBase,
})
