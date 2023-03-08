import { ICreateGroup } from '../models/request/create-group.model';
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
    return response.data;
  };

  register = async (data: IPostRegister) => {
    const url = '/iam/auth/register';
    const response: IResponse<any> = await this.service.post(url, data);
    return response.data;
  };

  getPolicies = async () => {
    const url = '/iam/users/policies';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  getAllUser = async () => {
    const url = '/iam/users';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  getAllGroup = async () => {
    const url = '/iam/groups';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  getMemberOfGroup = async (groupId: string) => {
    const url = `/iam/groups/${groupId}/getMembers`;
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  getGroupOfUser = async (userId: string) => {
    const url = `/iam/users/${userId}/group`;
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  userJoinToGroup = async (userId: string, groupIds: Array<string>) => {
    const url = `/iam/users/${userId}/joinGroup`;
    const response: IResponse<any> = await this.service.post(url, {
      groups: groupIds,
    });
    return response.data;
  };

  createGroup = async (data: ICreateGroup) => {
    const url = '/iam/groups';
    const response: IResponse<any> = await this.service.post(url, data);
    return response.data;
  };

  getAllOrganization = async () => {
    const url = '/iam/organizations';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  createOrganization = async (data: ICreateGroup) => {
    const url = '/iam/organizations';
    const response: IResponse<any> = await this.service.post(url, data);
    return response.data;
  };

  getAllRole = async () => {
    const url = '/iam/roles';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  createRole = async (data: ICreateGroup) => {
    const url = '/iam/roles';
    const response: IResponse<any> = await this.service.post(url, data);
    return response.data;
  };

  getAllProject = async () => {
    const url = '/iam/projects';
    const response: IResponse<any> = await this.service.get(url);
    return response.data;
  };

  createProject = async (data: ICreateGroup) => {
    const url = '/iam/projects';
    const response: IResponse<any> = await this.service.post(url, data);
    return response.data;
  };
}

export { ServiceMonitor };
