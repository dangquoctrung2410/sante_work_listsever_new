import { setAuthentication } from '../reducers/slice/authSlice';
import { ServiceMonitor } from './serviceMonitor';

export interface IServicesManager {
  serviceMonitor: ServiceMonitor | null;
}

export const defaultServicesManager: IServicesManager = {
  serviceMonitor: null,
};

export const onUnauthenticated: any = (store: any) => {
  store.dispatch(setAuthentication(false));
};

export const servicesManager: IServicesManager = defaultServicesManager;

export const serviceConfig = (store: any) => {
  const url = 'http://localhost:3018/v1';
  const service = new ServiceMonitor(url, onUnauthenticated, store);
  servicesManager.serviceMonitor = service;
};
