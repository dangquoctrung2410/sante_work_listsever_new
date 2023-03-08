export interface IGroup {
  createdAt: Date;
  fullname: string;
  username: string;
  email: string;
  groups: Array<any>;
}

export interface IListGroupReducer {
  listGroup: Array<IGroup>;
}
export const defaultListGroup: IListGroupReducer = { listGroup: [] };
