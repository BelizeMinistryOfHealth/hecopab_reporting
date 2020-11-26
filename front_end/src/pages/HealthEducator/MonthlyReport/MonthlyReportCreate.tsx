import React from 'react';
import { Box, Button, Form, FormExtendedEvent, Grid, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import {
  CapacityBuilding,
  CommunityPlatformProject,
  emptyGeoVectors,
  HealthEducation,
  MonthlyReport,
  OtherServices,
  Referrals,
} from '../../../api/healthEducator';
import BasicInfoForm, { BasicInfoState } from './BasicInfoForm';
import HealthEducationForm from './HealthEducationForm';
import ReferralsToHealthFacilitiesForm from './ReferralsToHealthFacilitiesForm';
import OtherServicesForm from './OtherServicesForm';
import CapacityBuildingForm from './CapacityBuildingForm';
import CommunityPlatformProjectForm from './CommunityPlatformProjectForm';
import { useHttpApi } from '../../../providers/HttpApiProvider';
import Spinner from '../../../components/Spinner/Spinner';

interface MonthlyReportCreateProps {
  onClickClose: () => void;
}

enum FormEventName {
  Submit,
  Response,
  Error,
}

interface FormEvent {
  name: FormEventName;
  monthlyReport?: MonthlyReport;
}

const MonthlyReportCreate = (props: MonthlyReportCreateProps) => {
  const { onClickClose } = props;
  const [monthlyReport, setMonthlyReport] = React.useState<MonthlyReport>();
  const [event, setEvent] = React.useState<FormEvent>();
  const { httpClient } = useHttpApi();
  const [basicInfo, setBasicInfo] = React.useState<BasicInfoState>({
    healthEducator: '',
    district: '',
    facility: '',
    month: 1,
    year: 2020,
  });
  const [referrals, setReferrals] = React.useState<Referrals>({
    familyPlanning: emptyGeoVectors(),
    preconceptionCare: emptyGeoVectors(),
    antenatalCare: emptyGeoVectors(),
    postnatalCare: emptyGeoVectors(),
    newbornCare: emptyGeoVectors(),
    cervicalCancerScreening: emptyGeoVectors(),
  });
  const [healthEducation, setHealthEducation] = React.useState<HealthEducation>(
    {
      healthEducationAndPromotionInSchools: emptyGeoVectors(),
      healthEducationAndPromotionSessionsInHospitalAndHealthCenter: emptyGeoVectors(),
      healthEducationSessionsWithinTheCommunity: emptyGeoVectors(),
      supervisoryVisitsToCommunityHealthWorkers: emptyGeoVectors(),
      homeVisits: emptyGeoVectors(),
      healthFairs: emptyGeoVectors(),
      wellnessDayActivities: emptyGeoVectors(),
      cleanupCampaigns: emptyGeoVectors(),
      educationConcerningDiabetes: emptyGeoVectors(),
      educationConcerningTobaccoCessation: emptyGeoVectors(),
    }
  );
  const [otherServices, setOtherServices] = React.useState<OtherServices>({
    orsZincDistributed: emptyGeoVectors(),
    rapidPregnancyTest: emptyGeoVectors(),
    glucoseMonitoring: emptyGeoVectors(),
    hyperglycemia: emptyGeoVectors(),
    hypoglycemia: emptyGeoVectors(),
    bloodPressure: emptyGeoVectors(),
    hypertension: emptyGeoVectors(),
    hypotension: emptyGeoVectors(),
    firstAid: emptyGeoVectors(),
    deaths: emptyGeoVectors(),
    births: emptyGeoVectors(),
  });
  const [
    capacityBuilding,
    setCapacityBuilding,
  ] = React.useState<CapacityBuilding>({
    newCommunityHealthWorkersRecruited: emptyGeoVectors(),
    communityHealthWorkersTrained: emptyGeoVectors(),
    workshopsForCommunityHealthWorkers: emptyGeoVectors(),
    workshopsForHealthEducators: emptyGeoVectors(),
    chwsInAttendanceAtMonthlyMeeting: emptyGeoVectors(),
    healthCommitteesFormed: emptyGeoVectors(),
    healthCommitteesTrained: emptyGeoVectors(),
  });
  const [
    communityPlatformProject,
    setCommunityPlatformProject,
  ] = React.useState<CommunityPlatformProject>({
    numberOfCommunitiesUnderCp: emptyGeoVectors(),
    totalNumberOfCommunitiesConfirmed: emptyGeoVectors(),
    numberOfMeetingsOrTrainingConducted: emptyGeoVectors(),
    challengesAndOrIssuesIdentified: emptyGeoVectors(),
    accomplishments: emptyGeoVectors(),
    externalAssistanceNeeded: emptyGeoVectors(),
  });

  const onSubmit = (e: FormExtendedEvent<any>): void => {
    e.preventDefault();

    //Create the monthly report:
    const report: MonthlyReport = {
      healthEducation: healthEducation,
      otherServices: otherServices,
      referrals: referrals,
      capacityBuilding: capacityBuilding,
      communityPlatformProject: communityPlatformProject,
      healthEducator: basicInfo.healthEducator,
      district: basicInfo.district,
      facility: basicInfo.facility,
      month: basicInfo.month,
      year: basicInfo.year,
    };
    console.dir({ report });
    setMonthlyReport(report);
    setEvent({
      name: FormEventName.Submit,
      monthlyReport,
    });
  };

  React.useEffect(() => {
    const postReport = async () => {
      const response = await httpClient.post(
        '/educator/monthlyReport',
        JSON.stringify(monthlyReport)
      );
      if (response.ok) {
        setEvent({ name: FormEventName.Response });
        onClickClose();
      } else {
        setEvent({ name: FormEventName.Error });
      }
    };
    if (event?.name === FormEventName.Submit) {
      postReport();
    }
  }, [monthlyReport, event]);

  if (event?.name === FormEventName.Submit) {
    return (
      <Box
        round
        pad={'small'}
        direction={'column'}
        margin={'small'}
        background={'white'}
        responsive={true}
        animation={['fadeIn', { type: 'slideDown', size: 'small' }]}
      >
        <Box flex={false} direction={'row-reverse'} align={'end'}>
          <Box>
            <Button icon={<Close size={'medium'} />} onClick={onClickClose} />
          </Box>
        </Box>
        <Box
          direction={'row'}
          align={'center'}
          pad={{ bottom: 'small', left: 'xxsmall' }}
        >
          <Heading level={2}>Health Educator Monthly Report</Heading>
        </Box>
        <Box direction={'column'} fill>
          <Spinner size={448} />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      round
      pad={'small'}
      direction={'column'}
      margin={'small'}
      background={'white'}
      responsive={true}
      animation={['fadeIn', { type: 'slideDown', size: 'small' }]}
    >
      <Box flex={false} direction={'row-reverse'} align={'end'}>
        <Box>
          <Button icon={<Close size={'medium'} />} onClick={onClickClose} />
        </Box>
      </Box>
      <Box
        direction={'row'}
        align={'center'}
        pad={{ bottom: 'small', left: 'xxsmall' }}
      >
        <Heading level={2}>Health Educator Monthly Report</Heading>
      </Box>
      <Box direction={'column'} fill>
        <Form onSubmit={onSubmit}>
          <Grid columns={{ count: 2, size: ['auto', 'large'] }} gap={'medium'}>
            <BasicInfoForm state={basicInfo} setter={setBasicInfo} />
            <ReferralsToHealthFacilitiesForm
              state={referrals}
              setter={setReferrals}
            />
            <HealthEducationForm
              state={healthEducation}
              setter={setHealthEducation}
            />
            <OtherServicesForm
              state={otherServices}
              setter={setOtherServices}
            />
            <CapacityBuildingForm
              state={capacityBuilding}
              setter={setCapacityBuilding}
            />
            <CommunityPlatformProjectForm
              state={communityPlatformProject}
              setter={setCommunityPlatformProject}
            />
          </Grid>
          <Box flex={false} align={'start'} pad={{ top: 'small' }}>
            <Button type={'submit'} label={'Save'} primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default MonthlyReportCreate;
