import dayjs from 'dayjs';
import { DEFAULT } from '../../utils/constants';

export interface IWorklistItem {
  status: number;
  elements: IElements;
}

export interface IWorklist {
  worklistData: {
    data: Array<IWorklistItem>;
    meta: {
      currentPage: number;
      itemsPerPage: number;
      totalItems: number;
      totalPages: number;
    };
  };
  queryParams: IQueryParams;
}

export interface IQueryParams {
  limit?: number;
  page?: number;
  sortBy?: string;
  select?: string;
  startDate: string;
  endDate: string;
  filter?: {
    patientId?: string;
    patientCode?: string;
    patientName?: string;
    modality?: string;
    accessionNumber?: string;
  };
}

export interface IElements {
  _vrMap: any;
  StudyDate: string;
  StudyTime: string;
  AccessionNumber: string;
  QueryRetrieveLevel: string;
  Modality: string;
  InstitutionName: string;
  ReferringPhysicianName: string;
  StudyDescription: string;
  ProcedureCodeSequence: Array<any>;
  AdmittingDiagnosesDescription: string;
  ReferencedStudySequence: Array<any>;
  PatientName: string;
  PatientID: string;
  IssuerOfPatientID: string;
  PatientBirthDate: string;
  PatientSex: string;
  PatientAge: string;
  PatientWeight: any;
  PatientAddress: string;
  MedicalAlerts: string;
  Allergies: string;
  PregnancyStatus: number;
  PatientComments: string;
  BodyPartExamined: string;
  StudyInstanceUID: string;
  StudyID: string;
  RequestingPhysician: string;
  RequestedProcedureDescription: string;
  RequestedProcedureCodeSequence: Array<any>;
  AdmissionID: string;
  SpecialNeeds: string;
  CurrentPatientLocation: string;
  PatientState: string;
}

export const defaultWorklist: IWorklist = {
  worklistData: {
    data: [],
    meta: {
      currentPage: DEFAULT.page,
      itemsPerPage: DEFAULT.limit,
      totalItems: 0,
      totalPages: 0,
    },
  },
  queryParams: {
    startDate: dayjs().startOf('date').toString(),
    endDate: dayjs().endOf('date').toString(),
  },
};
