import { IAddworklist } from '../models/reducers/addworklist.model';
import { IItem } from '../models/reducers/posttest.model';
import { IQueryParams } from '../models/reducers/worklist.model';
import { IRequest, IResponse } from '../models/response/IResponse';
import { ServiceBase } from './serviceBase';

class ServiceWorklist extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}, store: any) {
    super(baseURL, onUnauthenticated, store);
  }

  getWorklist = async (query?: IQueryParams) => {
    const url = '/worklist?';
    const queryParams = new URLSearchParams();
    if (query?.limit) {
      queryParams.set('limit', `${query.limit}`);
    }
    if (query?.page) {
      queryParams.set('page', `${query.page}`);
    }
    if (query?.startDate && query?.endDate) {
      queryParams.set(
        'filter.createdAt',
        `$btw:${query?.startDate},${query?.endDate}`,
      );
    }
    if (query?.filter?.patientName) {
      queryParams.set(
        'filter.patientName',
        `$ilike:${query.filter.patientName}`,
      );
    }
    if (query?.filter?.patientCode) {
      queryParams.set(
        'filter.patientCode',
        `$ilike:${query.filter.patientCode}`,
      );
    }
    if (query?.filter?.accessionNumber) {
      queryParams.set(
        'filter.accessionNumber',
        `$ilike:${query.filter.accessionNumber}`,
      );
    }
    if (query?.filter?.modality) {
      queryParams.set('filter.modality', `$eq:${query.filter.modality}`);
    }
    if (query?.filter?.patientId) {
      queryParams.set('filter.patientId', `$ilike:${query.filter.patientId}`);
    }
    if (query?.sortBy) {
      queryParams.set('sortBy', query.sortBy);
    }
    console.log(queryParams.toString());
    const response: IResponse<any> = await this.service.get(
      url + queryParams.toString(),
    );
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
