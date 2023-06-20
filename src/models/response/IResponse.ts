export interface IResponse<T> {
  data: T;
  status?: number;
  statusCode?: number;
  message?: string;
}

export interface IRequest {
  host: string;
  port: number;
  AETitle: string;
}
