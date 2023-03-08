import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getLanguage, getToken } from '../localstorage/localstorage';

const TIMEOUT = 1 * 60 * 100000;

class ServiceBase {
  service: AxiosInstance;
  store: any;
  onUnauthenticated: (store: any) => {};
  constructor(baseURL: string, onUnauthenticated: () => {}, store: any) {
    const service = axios.create({
      headers: {
        csrf: 'token',
        'Access-Control-Allow-Origin': '*',
      },
      timeout: TIMEOUT,
      baseURL,
    });
    service.interceptors.request.use(this.requestSuccess);
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    this.store = store;
    this.onUnauthenticated = onUnauthenticated;
  }

  requestSuccess = (config: any) => {
    const token = getToken();
    config.headers['Accept-Language'] = getLanguage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  };

  handleSuccess(response: AxiosResponse) {
    return response.data;
  }

  // logout = async () => {
  //   try {
  //     const response = await this.service.post('/api/Users/revoke-token')
  //     console.log(response, 'response')
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   store.dispatch(setAuth(false))
  // }

  handleError = (error: AxiosError | undefined) => {
    switch (error?.response?.status) {
      case 401:
      case 403:
        this.onUnauthenticated(this.store);
        break;

      default:
        break;
    }
    return error?.response
      ? Promise.reject(error?.response.data)
      : Promise.reject(error);
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };

  request = (config: any) => {
    return this.service(config);
  };
}

export { ServiceBase };
