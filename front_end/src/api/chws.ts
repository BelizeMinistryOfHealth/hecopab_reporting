export interface GenderCategories {
  male: number;
  female: number;
  total?: number;
}

export interface Tallies {
  oneToFour: GenderCategories;
  fiveToNine: GenderCategories;
  tenToFourteen: GenderCategories;
  fifteenToNineteen: GenderCategories;
  twentyToTwentyFour: GenderCategories;
  twentyFiveToTwentyNine: GenderCategories;
  thirtyToThirtyFour: GenderCategories;
  thirtyFiveToThirtyNine: GenderCategories;
  fortyToFortyFour: GenderCategories;
  fortyFiveToFortyNine: GenderCategories;
  fiftyToFiftyFour: GenderCategories;
  fiftyFiveToFiftyNine: GenderCategories;
  sixtyToSixtyFour: GenderCategories;
  sixtyFiveAndOver: GenderCategories;
}

const emptyCategories = (): GenderCategories => {
  return {
    male: 0,
    female: 0,
  };
};

export const createTallies = (): Tallies => {
  return {
    oneToFour: emptyCategories(),
    fiveToNine: emptyCategories(),
    tenToFourteen: emptyCategories(),
    fifteenToNineteen: emptyCategories(),
    twentyToTwentyFour: emptyCategories(),
    twentyFiveToTwentyNine: emptyCategories(),
    thirtyToThirtyFour: emptyCategories(),
    thirtyFiveToThirtyNine: emptyCategories(),
    fortyToFortyFour: emptyCategories(),
    fortyFiveToFortyNine: emptyCategories(),
    fiftyToFiftyFour: emptyCategories(),
    fiftyFiveToFiftyNine: emptyCategories(),
    sixtyToSixtyFour: emptyCategories(),
    sixtyFiveAndOver: emptyCategories(),
  };
};

export interface ChwMonthlyReport {
  healthEducator: string;
  ruralNurse: string;
  chw: string;
  district: string;
  month: number;
  year: number;
  patientsSeen: Tallies;
  deaths: Tallies;
  complaints: Tallies;
  births: Tallies;
  dutiesPerformed: Tallies;
}

export interface ChwMonthlyReportRecord {
  id: string;
  report: ChwMonthlyReport;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

export enum FormName {
  BasicInfo,
  Deaths,
  Births,
  PatientsSeen,
  Complaints,
  DutiesPerformed,
}

export enum FormStatus {
  Start,
  Submit,
  Success,
  Error,
  Loading,
}

export interface FormEvent {
  name: FormName;
  status: FormStatus;
}