export interface IAddWorklistItem {
  transferSyntaxUid: string;
  elements: IAddworklist;
}

export interface IAddworklist {
  host: string;
  port: number;
  aeTitle: string;
}

export const defaultAddWorklistItem: Array<IAddWorklistItem> = [];
