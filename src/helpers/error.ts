import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: AxiosResponse
  response?: any
  isAxiosError: boolean
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string,
    request?: AxiosResponse,
    response?: any
  ) {
    super(message)
    this.config = config
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string,
  request?: any,
  response?: any
): AxiosError {
  let error = new AxiosError(message, config, code, request, response)
  return error
}
