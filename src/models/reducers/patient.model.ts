export interface IPostPatientItem {
  patientData: string;
  elements: IItemPatient;
}

export interface IItemPatient {
  host: string;
  port: number;
  AETitle: string;
}

export const defaultTestItem: Array<IPostPatientItem> = [];
