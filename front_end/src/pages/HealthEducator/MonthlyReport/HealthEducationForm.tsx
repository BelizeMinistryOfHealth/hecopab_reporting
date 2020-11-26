import React, {SetStateAction} from 'react';
import { HealthEducation } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface HealthEducationFormProps {
  state: HealthEducation;
  setter: React.Dispatch<SetStateAction<HealthEducation>>;
}

const HealthEducationForm = (props: HealthEducationFormProps) => {
  const { state, setter } = props;

  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Health Education</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Health Education & Promotion in Schools: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'healthEducationAndPromotionInSchools.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'healthEducationAndPromotionInSchools.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthEducationAndPromotionInSchools: {...state.healthEducationAndPromotionInSchools, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthEducationAndPromotionInSchools.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'healthEducationAndPromotionInSchools.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthEducationAndPromotionInSchools.urban = parseInt(
                    e.target.value
                  );
                  setter({...state, healthEducationAndPromotionInSchools: {...state.healthEducationAndPromotionInSchools, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Health Education & Promotion in sessions in Hospital & Health Center:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={
              'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.rural'
            }
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={
                'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.rural'
              }
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthEducationAndPromotionSessionsInHospitalAndHealthCenter: {...state.healthEducationAndPromotionSessionsInHospitalAndHealthCenter, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={
              'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.urban'
            }
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={
                'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.urban'
              }
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthEducationAndPromotionSessionsInHospitalAndHealthCenter: {...state.healthEducationAndPromotionSessionsInHospitalAndHealthCenter, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Health Education Sessions within the Community:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'healthEducationSessionsWithinTheCommunity.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'healthEducationSessionsWithinTheCommunity.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthEducationSessionsWithinTheCommunity: {...state.healthEducationSessionsWithinTheCommunity, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthEducationSessionsWithinTheCommunity.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'healthEducationSessionsWithinTheCommunity.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthEducationSessionsWithinTheCommunity: {...state.healthEducationSessionsWithinTheCommunity, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Home Visits: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'homeVisits.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'homeVisits.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, homeVisits: {...state.homeVisits, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'homeVisits.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'homeVisits.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, homeVisits: {...state.homeVisits, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Supervisory Visits to Community Health Workers:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'supervisoryVisitsToCommunityHealthWorkers.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'supervisoryVisitsToCommunityHealthWorkers.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, supervisoryVisitsToCommunityHealthWorkers: {...state.supervisoryVisitsToCommunityHealthWorkers, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'supervisoryVisitsToCommunityHealthWorkers.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'supervisoryVisitsToCommunityHealthWorkers.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, supervisoryVisitsToCommunityHealthWorkers: {...state.supervisoryVisitsToCommunityHealthWorkers, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Health Fairs: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'healthFairs.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'healthFairs.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthFairs: {...state.healthFairs, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthFairs.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'healthFairs.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, healthFairs: {...state.healthFairs, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Wellness Days Activities: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'wellnessDayActivities.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'wellnessDayActivities.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, wellnessDayActivities: {...state.wellnessDayActivities, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'wellnessDayActivities.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'wellnessDayActivities.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, wellnessDayActivities: {...state.wellnessDayActivities, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Cleanup Campaigns: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'cleanupCampaigns.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'cleanupCampaigns.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, cleanupCampaigns: {...state.cleanupCampaigns, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'cleanupCampaigns.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'cleanupCampaigns.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, cleanupCampaigns: {...state.cleanupCampaigns, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Health education activities concerning Diabetes:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'educationConcerningDiabetes.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'educationConcerningDiabetes.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, educationConcerningDiabetes: {...state.educationConcerningDiabetes, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'educationConcerningDiabetes.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'educationConcerningDiabetes.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, educationConcerningDiabetes: {...state.educationConcerningDiabetes, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Health Education Sessions concerning Tobacco cessations:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'educationConcerningTobaccoCessation.rural'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'start',
            }}
            pad={false}
          >
            <TextInput
              name={'educationConcerningTobaccoCessation.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, educationConcerningTobaccoCessation: {...state.educationConcerningTobaccoCessation, rural: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
          <FormField
            name={'educationConcerningTobaccoCessation.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'educationConcerningTobaccoCessation.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({...state, educationConcerningTobaccoCessation: {...state.educationConcerningTobaccoCessation, urban: parseInt(e.target.value)}});
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
    </Box>
  );
};

export default HealthEducationForm;
