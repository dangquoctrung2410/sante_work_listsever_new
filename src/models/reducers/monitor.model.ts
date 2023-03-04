export interface IMonitor {
  key: string
  name: string
  description: string
  data: any
}

export const defaultMonitor: Array<IMonitor> = []
