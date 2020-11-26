export interface GeoVectors {
  rural: number;
  urban: number;
}

export const emptyGeoVectors = (): GeoVectors => ({ rural: 0, urban: 0 });

export interface HealthEducation {
  healthEducationAndPromotionInSchools: GeoVectors;
  healthEducationAndPromotionSessionsInHospitalAndHealthCenter: GeoVectors;
  healthEducationSessionsWithinTheCommunity: GeoVectors;
  supervisoryVisitsToCommunityHealthWorkers: GeoVectors;
  homeVisits: GeoVectors;
  healthFairs: GeoVectors;
  wellnessDayActivities: GeoVectors;
  cleanupCampaigns: GeoVectors;
  healthEducationActivitiesConcerningDiabetes: GeoVectors;
  healthEducationSessionsConcerningTobaccoCessation: GeoVectors;
}

export interface Referrals {
  familyPlanning: GeoVectors;
  preconceptionCare: GeoVectors;
  antenatalCare: GeoVectors;
  postnatalCare: GeoVectors;
  newbornCare: GeoVectors;
  cervicalCancerScreening: GeoVectors;
}

export interface OtherServices {
  orsZincDistributed: GeoVectors;
  rapidPregnancyTest: GeoVectors;
  glucoseMonitoring: GeoVectors;
  hyperglycemia: GeoVectors;
  hypoglycemia: GeoVectors;
  bloodPressure: GeoVectors;
  hypertension: GeoVectors;
  hypotension: GeoVectors;
  firstAid: GeoVectors;
  deaths: GeoVectors;
  births: GeoVectors;
}

export interface CapacityBuilding {
  newCommunityHealthWorkersRecruited: GeoVectors;
  communityHealthWorkersTrained: GeoVectors;
  workshopsForCommunityHealthWorkers: GeoVectors;
  workshopsForHealthEducators: GeoVectors;
  chwsInAttendanceAtMonthlyMeeting: GeoVectors;
  healthCommitteesFormed: GeoVectors;
  healthCommitteesTrained: GeoVectors;
}

export interface CommunityPlatformProject {
  numberOfCommunitiesUnderCp: GeoVectors;
  totalNumberOfCommunitiesConfirmed: GeoVectors;
  numberOfMeetingsOrTrainingConducted: GeoVectors;
  challengesAndOrIssuesIdentified: GeoVectors;
  accomplishments: GeoVectors;
  externalAssistanceNeeded: GeoVectors;
}

export interface MonthlyReport {
  healthEducator: string;
  district: string;
  facility: string;
  month: number;
  year: number;
  healthEducation: HealthEducation;
  referrals: Referrals;
  otherServices: OtherServices;
  capacityBuilding: CapacityBuilding;
  communityPlatformProject: CommunityPlatformProject;
}

export interface MonthlyReportRecord {
  id: string;
  monthlyReport: MonthlyReport;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
