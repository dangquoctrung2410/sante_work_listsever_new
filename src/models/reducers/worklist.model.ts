export interface IWorklistItem {
  status: number;
  elements: IElements;
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

export type IDataPatient = {
  status: number;
  data: {
    data: Array<{
      version: number;
      createdAt: string;
      updatedAt: string;
      id: string;
      modality: string;
      patientId: string;
      patientName: string;
      patientCode: string;
      serviceName: string;
    }>;
    meta: {
      itemsPerPage: number;
      totalItems: number;
      currentPage: number;
      totalPages: number;
      sortBy: Array<Array<string>>;
    };
    links: {
      current: string;
    };
  };
};

export const defaultDataPatient: Array<IDataPatient> = [];
export const defaultWorklist: Array<IWorklistItem> = [];
