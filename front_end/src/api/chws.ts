import { ChangeEvent } from 'react';

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
  sixtyFiveOrMore: GenderCategories;
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
    sixtyFiveOrMore: emptyCategories(),
  };
};

export interface Complaints {
  malnutrition: Tallies;
  diarrhea: Tallies;
  cold: Tallies;
  fever: Tallies;
  feverRash: Tallies;
  soresRashes: Tallies;
}

export interface EdSession {
  dateHeld: Date;
  topic: string;
  venue: string;
  total: GenderCategories;
}

export interface HealthEdSessions {
  sessions: EdSession[];
}

export interface Meetings {
  communityMeetings: number;
  meetingsOrganized: number;
  trainingSessions: number;
  workshops: number;
  other: number;
  comments: string;
}

export interface ChwMonthlyReport {
  healthEducator: string;
  ruralNurse: string;
  chw: string;
  district: string;
  month: number;
  year: number;
  patientsSeen: Tallies;
  deaths: Tallies;
  complaints: Complaints;
  healthEdSessions: HealthEdSessions;
  meetings: Meetings;
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
  ComplaintsFever,
  ComplaintsMalnutrition,
  ComplaintsDiarrhea,
  ComplaintsCold,
  ComplaintsFeverRash,
  ComplaintsSoresRashes,
  DutiesPerformed,
  Meetings,
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

export const readEventValueAsNum = (
  e: ChangeEvent<HTMLInputElement>
): number => {
  let v: number;
  v = 0;
  if (e.currentTarget.value.trim() === '') {
    return v;
  }
  try {
    v = parseInt(e.currentTarget.value.trim());
  } catch (ex) {
    //noop
  }
  return v;
};
