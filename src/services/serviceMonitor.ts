import { IPostLogin } from '../models/request/login.model';
import { IPostRegister } from '../models/request/register.model';
import { IResponse } from '../models/response/response.model';
import { ServiceBase } from './serviceBase';

class ServiceMonitor extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}, store: any) {
    super(baseURL, onUnauthenticated, store);
  }

  // get UserInfo
  getMonitor = async () => {
    const url = '/monitor/performance';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  // get UserInfo
  login = async (data: IPostLogin) => {
    const url = '/iam/auth/login';
    const response: IResponse<any> = await this.service.post(url, data);
    return response;
  };

  register = async (data: IPostRegister) => {
    const url = '/iam/auth/register';
    const response: IResponse<any> = await this.service.post(url, data);
    return response;
  };

  getPolicies = async () => {
    const url = '/iam/users/policies';
    const response: IResponse<any> = await this.service.get(url);
    return response;
  };

  getAllUser = async () => {
    const url = '/iam/users';
    const response: IResponse<any> = await this.service.get(url);
    return response;
  };
}

export { ServiceMonitor };
