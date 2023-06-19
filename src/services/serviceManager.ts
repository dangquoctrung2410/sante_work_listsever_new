import { setAuthentication } from '../reducers/slice/authSlice';
import { ServiceMonitor } from './serviceMonitor';
import { ServiceWorklist } from './serviceWorklist';

export interface IServicesManager {
  serviceWorklist: ServiceWorklist | null;
  serviceMonitor: ServiceMonitor | null;
}

export const defaultServicesManager: IServicesManager = {
  serviceWorklist: null,
  serviceMonitor: null,
};

export const onUnauthenticated: any = (store: any) => {
  store.dispatch(setAuthentication(false));
};

export const servicesManager: IServicesManager = defaultServicesManager;

export const serviceConfig = (store: any) => {
  const worklistURL = 'http://localhost:3018/v1';
  const monitorURL = 'http://localhost:3018/v1';

  const serviceWorklist = new ServiceWorklist(
    worklistURL,
    onUnauthenticated,
    store,
  );
  const serviceMonitor = new ServiceMonitor(
    monitorURL,
    onUnauthenticated,
    store,
  );

  servicesManager.serviceWorklist = serviceWorklist;
  servicesManager.serviceMonitor = serviceMonitor;
};
