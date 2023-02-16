import { ServiceTestLogin } from './serviceTestLogin'

export interface IServicesManager {
  TestLogin: ServiceTestLogin
}

export const defaultServicesManager: IServicesManager = {
  TestLogin: new ServiceTestLogin(''),
}

export const servicesManager: IServicesManager = defaultServicesManager
