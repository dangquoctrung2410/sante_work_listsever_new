import { IAddworklist } from '../models/reducers/addworklist.model';
import { IItem } from '../models/reducers/posttest.model';
import { IRequest, IResponse } from '../models/response/IResponse';
import { ServiceBase } from './serviceBase';

class ServiceWorklist extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}, store: any) {
    super(baseURL, onUnauthenticated, store);
  }

  getAllPatient = async (
    pageindex?: number,
    modality?: any,
    patientName?: any,
    sortBy?: any,
  ) => {
    const url = `/worklist?`;

    const params = new URLSearchParams();

    if (modality) {
      params.set('filter.modality', `$eq:${modality}`);
    }
    if (pageindex) {
      params.set('page', `${pageindex}`);
    }
    if (patientName) {
      params.set('filter.patientName', `$ilike:${patientName}`);
    }
    if (sortBy) {
      params.set('sortBy', `${sortBy}`);
    }

    const response: IResponse<any> = await this.service.get(
      url + params.toString(),
    );
    return response.data.data;
  };

  deletePatient = async (id: any) => {
    const url = `/worklist/${id}`;
    const response = await this.service.delete(url);
    return response.data.data;
  };

  updatePatient = async (id: any, data: any) => {
    const url = `/worklist/${id}`;
    const response = await this.service.patch(url, data);
    return response.data.data;
  };

  createPatient = async (data: any) => {
    const url = `/worklist`;
    const response = await this.service.post(url, data);
    return response.data.data;
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
