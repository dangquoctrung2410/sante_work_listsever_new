import { IResponse } from '../models/response/IResponse';
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
}

export { ServiceWorklist };
