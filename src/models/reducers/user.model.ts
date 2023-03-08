export interface IUser {
  createdAt: Date;
  fullname: string;
  username: string;
  email: string;
  groups: Array<any>;
}

export interface IListUserReducer {
  listUser: Array<IUser>;
}
export const defaultListUser: IListUserReducer = { listUser: [] };
