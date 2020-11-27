import React, { SetStateAction } from 'react';
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
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'healthEducationAndPromotionInSchools.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.healthEducationAndPromotionInSchools.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationAndPromotionInSchools: {
                      ...state.healthEducationAndPromotionInSchools,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthEducationAndPromotionInSchools.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.healthEducationAndPromotionInSchools.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthEducationAndPromotionInSchools.urban = parseInt(
                    e.target.value
                  );
                  setter({
                    ...state,
                    healthEducationAndPromotionInSchools: {
                      ...state.healthEducationAndPromotionInSchools,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
            pad={false}
          >
            <TextInput
              name={
                'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.rural'
              }
              placeholder={'Rural'}
              size={'small'}
              defaultValue={
                state
                  .healthEducationAndPromotionSessionsInHospitalAndHealthCenter
                  .rural
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationAndPromotionSessionsInHospitalAndHealthCenter: {
                      ...state.healthEducationAndPromotionSessionsInHospitalAndHealthCenter,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={
              'healthEducationAndPromotionSessionsInHospitalAndHealthCenter.urban'
            }
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={
                state
                  .healthEducationAndPromotionSessionsInHospitalAndHealthCenter
                  .urban
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationAndPromotionSessionsInHospitalAndHealthCenter: {
                      ...state.healthEducationAndPromotionSessionsInHospitalAndHealthCenter,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={
                state.healthEducationSessionsWithinTheCommunity.rural
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationSessionsWithinTheCommunity: {
                      ...state.healthEducationSessionsWithinTheCommunity,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthEducationSessionsWithinTheCommunity.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={
                state.healthEducationSessionsWithinTheCommunity.urban
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationSessionsWithinTheCommunity: {
                      ...state.healthEducationSessionsWithinTheCommunity,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={state.homeVisits.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    homeVisits: {
                      ...state.homeVisits,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'homeVisits.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.homeVisits.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    homeVisits: {
                      ...state.homeVisits,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={
                state.supervisoryVisitsToCommunityHealthWorkers.rural
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    supervisoryVisitsToCommunityHealthWorkers: {
                      ...state.supervisoryVisitsToCommunityHealthWorkers,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'supervisoryVisitsToCommunityHealthWorkers.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={
                state.supervisoryVisitsToCommunityHealthWorkers.urban
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    supervisoryVisitsToCommunityHealthWorkers: {
                      ...state.supervisoryVisitsToCommunityHealthWorkers,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={state.healthFairs.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthFairs: {
                      ...state.healthFairs,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthFairs.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.healthFairs.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthFairs: {
                      ...state.healthFairs,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={state.wellnessDayActivities.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    wellnessDayActivities: {
                      ...state.wellnessDayActivities,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'wellnessDayActivities.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.wellnessDayActivities.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    wellnessDayActivities: {
                      ...state.wellnessDayActivities,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={state.cleanupCampaigns.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    cleanupCampaigns: {
                      ...state.cleanupCampaigns,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'cleanupCampaigns.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.cleanupCampaigns.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    cleanupCampaigns: {
                      ...state.cleanupCampaigns,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={
                state.healthEducationActivitiesConcerningDiabetes.rural
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationActivitiesConcerningDiabetes: {
                      ...state.healthEducationActivitiesConcerningDiabetes,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'educationConcerningDiabetes.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={
                state.healthEducationActivitiesConcerningDiabetes.urban
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationActivitiesConcerningDiabetes: {
                      ...state.healthEducationActivitiesConcerningDiabetes,
                      urban: parseInt(e.target.value),
                    },
                  });
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
            label={<Text size={'small'}>Rural</Text>}
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
              defaultValue={
                state.healthEducationSessionsConcerningTobaccoCessation.rural
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationSessionsConcerningTobaccoCessation: {
                      ...state.healthEducationSessionsConcerningTobaccoCessation,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'educationConcerningTobaccoCessation.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={
                state.healthEducationSessionsConcerningTobaccoCessation.urban
              }
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    healthEducationSessionsConcerningTobaccoCessation: {
                      ...state.healthEducationSessionsConcerningTobaccoCessation,
                      urban: parseInt(e.target.value),
                    },
                  });
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
