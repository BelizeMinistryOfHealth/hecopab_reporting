import React from 'react';
import { Box, Button, Form, FormExtendedEvent, Grid, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import { emptyGeoVectors, MonthlyReport } from '../../../api/healthEducator';
import BasicInfoForm, { BasicInfoFormProps } from './BasicInfoForm';
import HealthEducationForm, {
  HealthEducationFormProps,
} from './HealthEducationForm';
import ReferralsToHealthFacilitiesForm, {
  ReferralsToHealthFacilitiesFormProps,
} from './ReferralsToHealthFacilitiesForm';
import OtherServicesForm, { OtherServicesFormProps } from './OtherServicesForm';
import CapacityBuildingForm, {
  CapacityBuildingFormProps,
} from './CapacityBuildingForm';
import CommunityPlatformProjectForm, {
  CommunityPlatformProjectFormProps,
} from './CommunityPlatformProjectForm';
import { useHttpApi } from '../../../providers/HttpApiProvider';

interface MonthlyReportCreateProps {
  onClickClose: () => void;
}

enum FormEventName {
  Submit,
  Response,
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
  const basicInfoFormProps: BasicInfoFormProps = {
    state: {
      healthEducator: '',
      district: '',
      facility: '',
      month: 1,
      year: 2020,
    },
  };
  const healthEducationFormProps: HealthEducationFormProps = {
    state: {
      healthEducationAndPromotionInSchools:
        monthlyReport?.healthEducation.healthEducationAndPromotionInSchools ??
        emptyGeoVectors(),
      healthEducationAndPromotionSessionsInHospitalAndHealthCenter:
        monthlyReport?.healthEducation
          .healthEducationAndPromotionSessionsInHospitalAndHealthCenter ??
        emptyGeoVectors(),
      healthEducationSessionsWithinTheCommunity:
        monthlyReport?.healthEducation
          .healthEducationSessionsWithinTheCommunity ?? emptyGeoVectors(),
      supervisoryVisitsToCommunityHealthWorkers:
        monthlyReport?.healthEducation
          .supervisoryVisitsToCommunityHealthWorkers ?? emptyGeoVectors(),
      homeVisits:
        monthlyReport?.healthEducation.homeVisits ?? emptyGeoVectors(),
      healthFairs:
        monthlyReport?.healthEducation.healthFairs ?? emptyGeoVectors(),
      wellnessDayActivities:
        monthlyReport?.healthEducation.wellnessDayActivities ??
        emptyGeoVectors(),
      cleanupCampaigns:
        monthlyReport?.healthEducation.cleanupCampaigns ?? emptyGeoVectors(),
      educationConcerningDiabetes:
        monthlyReport?.healthEducation.educationConcerningDiabetes ??
        emptyGeoVectors(),
      educationConcerningTobaccoCessation:
        monthlyReport?.healthEducation.educationConcerningTobaccoCessation ??
        emptyGeoVectors(),
    },
  };
  const referralsFormProps: ReferralsToHealthFacilitiesFormProps = {
    state: {
      familyPlanning: emptyGeoVectors(),
      preconceptionCare: emptyGeoVectors(),
      antenatalCare: emptyGeoVectors(),
      postnatalCare: emptyGeoVectors(),
      newbornCare: emptyGeoVectors(),
      cervicalCancerScreening: emptyGeoVectors(),
    },
  };
  const otherServicesFormProps: OtherServicesFormProps = {
    state: {
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
    },
  };
  const capacityBuildingFormProps: CapacityBuildingFormProps = {
    state: {
      newCommunityHealthWorkersRecruited: emptyGeoVectors(),
      communityHealthWorkersTrained: emptyGeoVectors(),
      workshopsForCommunityHealthWorkers: emptyGeoVectors(),
      workshopsForHealthEducators: emptyGeoVectors(),
      chwsInAttendanceAtMonthlyMeeting: emptyGeoVectors(),
      healthCommitteesFormed: emptyGeoVectors(),
      healthCommitteesTrained: emptyGeoVectors(),
    },
  };
  const ccpFormProps: CommunityPlatformProjectFormProps = {
    state: {
      numberOfCommunitiesUnderCp: emptyGeoVectors(),
      totalNumberOfCommunitiesConfirmed: emptyGeoVectors(),
      numberOfMeetingsOrTrainingConducted: emptyGeoVectors(),
      challengesAndOrIssuesIdentified: emptyGeoVectors(),
      accomplishments: emptyGeoVectors(),
      externalAssistanceNeeded: emptyGeoVectors(),
    },
  };

  const onSubmit = (e: FormExtendedEvent<any>): void => {
    e.preventDefault();

    //Create the monthly report:
    const report: MonthlyReport = {
      healthEducation: healthEducationFormProps.state,
      otherServices: otherServicesFormProps.state,
      referrals: referralsFormProps.state,
      capacityBuilding: capacityBuildingFormProps.state,
      communityPlatformProject: ccpFormProps.state,
      healthEducator: basicInfoFormProps.state.healthEducator,
      district: basicInfoFormProps.state.district,
      facility: basicInfoFormProps.state.facility,
      month: basicInfoFormProps.state.month,
      year: basicInfoFormProps.state.year,
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
      const result = response.json();
      console.dir({ result });
    };
    if (event?.name === FormEventName.Submit) {
      console.dir({ monthlyReport });
      postReport();
    }
  }, [monthlyReport, event]);

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
            <BasicInfoForm state={basicInfoFormProps.state} />
            <ReferralsToHealthFacilitiesForm state={referralsFormProps.state} />
            <HealthEducationForm state={healthEducationFormProps.state} />
            <OtherServicesForm state={otherServicesFormProps.state} />
            <CapacityBuildingForm state={capacityBuildingFormProps.state} />
            <CommunityPlatformProjectForm state={ccpFormProps.state} />
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
