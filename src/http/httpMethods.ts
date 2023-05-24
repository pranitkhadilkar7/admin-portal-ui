import { AxiosResponse, AxiosRequestConfig } from "axios"
import { httpInstance } from "./httpInstance"

function validateStatus(status: any) {
  return Number(status) >= 200 && Number(status) < 300
}

export function get<T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> {
  return httpInstance.get(url, { ...config, validateStatus })
}

export function post<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<R> {
  return httpInstance.post(url, data, { ...config, validateStatus })
}

export function put<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<R> {
  return httpInstance.put(url, data, { ...config, validateStatus })
}

export function patch<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<R> {
  return httpInstance.patch(url, data, { ...config, validateStatus })
}

export function del<T = any, R = AxiosResponse<T>>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> {
  return httpInstance.delete(url, { ...config, validateStatus })
}
