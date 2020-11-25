import React from 'react';
import { CapacityBuilding } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface CapacityBuildingFormProps {
  state: CapacityBuilding;
}

const CapacityBuildingForm = (props: CapacityBuildingFormProps) => {
  const { state } = props;

  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Capacity Building</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>New Community Health Workers Recruited: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'newCommunityHealthWorkersRecruited.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'newCommunityHealthWorkersRecruited.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.newCommunityHealthWorkersRecruited.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'newCommunityHealthWorkersRecruited.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'newCommunityHealthWorkersRecruited.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.newCommunityHealthWorkersRecruited.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Community Health Workers Trained: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'communityHealthWorkersTrained.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'communityHealthWorkersTrained.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.communityHealthWorkersTrained.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'communityHealthWorkersTrained.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'communityHealthWorkersTrained.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.communityHealthWorkersTrained.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Workshops for Community Health Workers: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'workshopsForCommunityHealthWorkers.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'workshopsForCommunityHealthWorkers.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.workshopsForCommunityHealthWorkers.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'workshopsForCommunityHealthWorkers.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'workshopsForCommunityHealthWorkers.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.workshopsForCommunityHealthWorkers.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Workshops for Health Educators: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'workshopsForHealthEducators.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'workshopsForHealthEducators.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.workshopsForHealthEducators.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'workshopsForHealthEducators.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'workshopsForHealthEducators.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.workshopsForHealthEducators.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>CHWs in attendance at monthly meeting: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'chwsInAttendanceAtMonthlyMeeting.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'chwsInAttendanceAtMonthlyMeeting.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.chwsInAttendanceAtMonthlyMeeting.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'chwsInAttendanceAtMonthlyMeeting.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'chwsInAttendanceAtMonthlyMeeting.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.chwsInAttendanceAtMonthlyMeeting.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Health Committees Formed: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'healthCommitteesFormed.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'healthCommitteesFormed.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthCommitteesFormed.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthCommitteesFormed.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'healthCommitteesFormed.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthCommitteesFormed.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Health Committees Trained: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'healthCommitteesTrained.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'healthCommitteesTrained.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthCommitteesTrained.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'healthCommitteesTrained.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'healthCommitteesTrained.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.healthCommitteesTrained.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
    </Box>
  );
};

export default CapacityBuildingForm;
