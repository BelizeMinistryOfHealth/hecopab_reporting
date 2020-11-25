import React from 'react';
import { CommunityPlatformProject } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface CommunityPlatformProjectFormProps {
  state: CommunityPlatformProject;
}

const CommunityPlatformProjectForm = (
  props: CommunityPlatformProjectFormProps
) => {
  const { state } = props;

  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Community Platform Project</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Number of Communities under CP: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'numberOfCommunitiesUnderCp.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'numberOfCommunitiesUnderCp.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.numberOfCommunitiesUnderCp.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'numberOfCommunitiesUnderCp.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'numberOfCommunitiesUnderCp.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.numberOfCommunitiesUnderCp.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          Total Number of Communities Confirmed/Established Up to Date:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'totalNumberOfCommunitiesConfirmed.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'totalNumberOfCommunitiesConfirmed.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.totalNumberOfCommunitiesConfirmed.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'totalNumberOfCommunitiesConfirmed.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'totalNumberOfCommunitiesConfirmed.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.totalNumberOfCommunitiesConfirmed.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Number of Meetings or Training Conducted: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'numberOfMeetingsOrTrainingConducted.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'numberOfMeetingsOrTrainingConducted.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.numberOfMeetingsOrTrainingConducted.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'numberOfMeetingsOrTrainingConducted.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'numberOfMeetingsOrTrainingConducted.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.numberOfMeetingsOrTrainingConducted.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Challenges and/or Issues Identified: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'challengesAndOrIssuesIdentified.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'challengesAndOrIssuesIdentified.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.challengesAndOrIssuesIdentified.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'challengesAndOrIssuesIdentified.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'challengesAndOrIssuesIdentified.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.challengesAndOrIssuesIdentified.urban = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Accomplishments: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'accomplishments.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'accomplishments.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.accomplishments.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'accomplishments.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'accomplishments.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.accomplishments.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>
          External Assistance Needed to address issues:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'externalAssistanceNeeded.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'externalAssistanceNeeded.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.externalAssistanceNeeded.rural = parseInt(
                    e.target.value
                  );
                }
              }}
            />
          </FormField>
          <FormField
            name={'externalAssistanceNeeded.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'externalAssistanceNeeded.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.externalAssistanceNeeded.urban = parseInt(
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

export default CommunityPlatformProjectForm;
