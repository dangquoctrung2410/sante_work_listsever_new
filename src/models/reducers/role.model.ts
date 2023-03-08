export interface IRole {
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

export interface IListRoleReducer {
  listRole: Array<IRole>;
}
export const defaultListGroup: IListRoleReducer = { listRole: [] };
