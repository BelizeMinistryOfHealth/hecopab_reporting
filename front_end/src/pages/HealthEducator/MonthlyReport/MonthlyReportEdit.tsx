import React from 'react';
import {
  CapacityBuilding,
  CommunityPlatformProject,
  HealthEducation,
  MonthlyReport,
  MonthlyReportRecord,
  OtherServices,
  Referrals,
} from '../../../api/healthEducator';
import BasicInfoForm, { BasicInfoState } from './BasicInfoForm';
import { Box, Button, Form, Grid, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import ReferralsToHealthFacilitiesForm from './ReferralsToHealthFacilitiesForm';
import HealthEducationForm from './HealthEducationForm';
import OtherServicesForm from './OtherServicesForm';
import CapacityBuildingForm from './CapacityBuildingForm';
import CommunityPlatformProjectForm from './CommunityPlatformProjectForm';

export interface MonthlyReportEditProps {
  report: MonthlyReportRecord;
  saveReport: (r: MonthlyReportRecord) => void;
  onClickClose: () => void;
}

const MonthlyReportEdit = (props: MonthlyReportEditProps) => {
  const { report, saveReport, onClickClose } = props;
  const { monthlyReport } = report;

  const [basicInfo, setBasicInfo] = React.useState<BasicInfoState>({
    healthEducator: monthlyReport.healthEducator,
    district: monthlyReport.district,
    facility: monthlyReport.facility,
    month: monthlyReport.month,
    year: monthlyReport.year,
  });
  const [referrals, setReferrals] = React.useState<Referrals>(
    monthlyReport.referrals
  );
  const [healthEducation, setHealthEducation] = React.useState<HealthEducation>(
    monthlyReport.healthEducation
  );
  const [otherServices, setOtherServices] = React.useState<OtherServices>(
    monthlyReport.otherServices
  );
  const [
    capacityBuilding,
    setCapacityBuilding,
  ] = React.useState<CapacityBuilding>(monthlyReport.capacityBuilding);
  const [
    communityPlatformProject,
    setCommunityPlatformProject,
  ] = React.useState<CommunityPlatformProject>(
    monthlyReport.communityPlatformProject
  );
  const onSubmit = () => {
    const updatedReport: MonthlyReport = {
      healthEducation,
      capacityBuilding,
      communityPlatformProject,
      otherServices,
      referrals,
      healthEducator: basicInfo.healthEducator,
      district: basicInfo.district,
      facility: basicInfo.facility,
      month: basicInfo.month,
      year: basicInfo.year,
    };
    const updatedReportRecord: MonthlyReportRecord = {
      id: report.id,
      monthlyReport: updatedReport,
      createdAt: report.createdAt,
      createdBy: report.createdBy,
    };
    saveReport(updatedReportRecord);
  };

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
            <Button type={'submit'} label={'Update'} primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default MonthlyReportEdit;
