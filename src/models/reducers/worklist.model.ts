export interface IWorklistItem {
  transferSyntaxUid: string;
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

export const defaultWorklist: Array<IWorklistItem> = [];
