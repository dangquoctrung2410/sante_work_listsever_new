export interface IProject {
  version: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  key: string;
  name: string;
  type: string;
  description?: any;
  policies: Array<any>;
}

export interface IListProjectReducer {
  listProject: Array<IProject>;
}
export const defaultListProject: IListProjectReducer = { listProject: [] };
