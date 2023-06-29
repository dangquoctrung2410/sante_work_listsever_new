import { IAddworklist } from '../models/reducers/addworklist.model';
import { IItem } from '../models/reducers/posttest.model';
import { IRequest, IResponse } from '../models/response/IResponse';
import { ServiceBase } from './serviceBase';

class ServiceWorklist extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}, store: any) {
    super(baseURL, onUnauthenticated, store);
  }

  getWorklist = async () => {
    const url = '/scp/modalityWorklist';
    const response: IResponse<any> = await this.service.post(url);
    return response.data;
  };

  potsWorklist = async (data: IItem) => {
    const url = '/scu/echo';
    const response: IRequest = await this.service.post(url, data);
    return response;
  };

  addWorklist = async (data: IAddworklist) => {
    const url = '/dicom-node';
    const response: IRequest = await this.service.post(url, data);
    return response;
  };
  getAllWorklist = async () => {
    const url = '/dicom-node';
    const response = await this.service.get(url);

    return response;
  };
  updateWorklist = async (id: any, data: any) => {
    const url = `/dicom-node/${id}`;
    const response = await this.service.patch(url, data);
    return response;
  };
  deleteWorklist = async (id: any) => {
    const url = `/dicom-node/${id}`;
    const response = await this.service.delete(url);
    return response;
  };
}

export { ServiceWorklist };
