export interface IWorklistItem {
  transferSyntaxUid: string;
  elements: Elements;
}

export interface Elements {
  _vrMap: any;
  StudyDate: string;
  StudyTime: string;
  AccessionNumber: string;
  QueryRetrieveLevel: string;
  Modality: string;
  InstitutionName: string;
  ReferringPhysicianName: string;
  StudyDescription: string;
  ProcedureCodeSequence: any[];
  AdmittingDiagnosesDescription: string;
  ReferencedStudySequence: any[];
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
  RequestedProcedureCodeSequence: any[];
  AdmissionID: string;
  SpecialNeeds: string;
  CurrentPatientLocation: string;
  PatientState: string;
}

export const defaultWorklist: Array<IWorklistItem> = [];
