import { setAuthentication } from '../reducers/slice/authSlice'
import { getStore } from '../redux/store'
import { ServiceMonitor } from './serviceMonitor'

export interface IServicesManager {
  serviceMonitor: ServiceMonitor | null
}

export const defaultServicesManager: IServicesManager = {
  serviceMonitor: null,
}

export const onUnauthenticated: any = () => {
  const store = getStore()
  store.dispatch(setAuthentication(false))
}

export const servicesManager: IServicesManager = defaultServicesManager

export const serviceConfig = () => {
  const url = 'http://localhost:3018/v1'
  const service = new ServiceMonitor(url, onUnauthenticated)
  servicesManager.serviceMonitor = service
}
