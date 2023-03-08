export interface IOrganization {
  createdAt: Date;
  name: string;
  description: string;
  projects: Array<any>;
}

export interface IListOrganizationReducer {
  listOrganization: Array<IOrganization>;
}
export const defaultListOrganization: IListOrganizationReducer = {
  listOrganization: [],
};
