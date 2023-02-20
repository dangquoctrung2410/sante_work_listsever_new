import { IPostLogin } from '../models/login.model'
import { IResponse } from '../models/response.model'
import { ServiceBase } from './serviceBase'

class ServiceMonitor extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}) {
    super(baseURL, onUnauthenticated)
  }

  // get UserInfo
  getMonitor = async () => {
    const url = '/monitor/performance'
    const response: IResponse<any> = await this.service.get(url)
    return response.data
  }

  // get UserInfo
  login = async (data: IPostLogin) => {
    const url = '/authenticate/login'
    const response: IResponse<any> = await this.service.post(url, data)
    return response
  }
}

export { ServiceMonitor }
