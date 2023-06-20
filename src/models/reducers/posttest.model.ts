export interface IPostTestItem {
  transferSyntaxUid: string;
  elements: IItem;
}

export interface IItem {
  host: string;
  port: number;
  AETitle: string;
}

export const defaultTestItem: Array<IPostTestItem> = [];
