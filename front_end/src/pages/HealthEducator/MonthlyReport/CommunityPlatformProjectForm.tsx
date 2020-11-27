import React, { SetStateAction } from 'react';
import { CommunityPlatformProject } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface CommunityPlatformProjectFormProps {
  state: CommunityPlatformProject;
  setter: React.Dispatch<SetStateAction<CommunityPlatformProject>>;
}

const CommunityPlatformProjectForm = (
  props: CommunityPlatformProjectFormProps
) => {
  const { state, setter } = props;

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
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'numberOfCommunitiesUnderCp.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.numberOfCommunitiesUnderCp.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    numberOfCommunitiesUnderCp: {
                      ...state.numberOfCommunitiesUnderCp,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'numberOfCommunitiesUnderCp.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.numberOfCommunitiesUnderCp.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    numberOfCommunitiesUnderCp: {
                      ...state.numberOfCommunitiesUnderCp,
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
          Total Number of Communities Confirmed/Established Up to Date:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'totalNumberOfCommunitiesConfirmed.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'totalNumberOfCommunitiesConfirmed.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.totalNumberOfCommunitiesConfirmed.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    totalNumberOfCommunitiesConfirmed: {
                      ...state.totalNumberOfCommunitiesConfirmed,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'totalNumberOfCommunitiesConfirmed.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.totalNumberOfCommunitiesConfirmed.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    totalNumberOfCommunitiesConfirmed: {
                      ...state.totalNumberOfCommunitiesConfirmed,
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
        <Text size={'small'}>Number of Meetings or Training Conducted: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'numberOfMeetingsOrTrainingConducted.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'numberOfMeetingsOrTrainingConducted.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.numberOfMeetingsOrTrainingConducted.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    numberOfMeetingsOrTrainingConducted: {
                      ...state.numberOfMeetingsOrTrainingConducted,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'numberOfMeetingsOrTrainingConducted.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.numberOfMeetingsOrTrainingConducted.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    numberOfMeetingsOrTrainingConducted: {
                      ...state.numberOfMeetingsOrTrainingConducted,
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
        <Text size={'small'}>Challenges and/or Issues Identified: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'challengesAndOrIssuesIdentified.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'challengesAndOrIssuesIdentified.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.challengesAndOrIssuesIdentified.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    challengesAndOrIssuesIdentified: {
                      ...state.challengesAndOrIssuesIdentified,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'challengesAndOrIssuesIdentified.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.challengesAndOrIssuesIdentified.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    challengesAndOrIssuesIdentified: {
                      ...state.challengesAndOrIssuesIdentified,
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
        <Text size={'small'}>Accomplishments: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'accomplishments.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'accomplishments.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.accomplishments.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    accomplishments: {
                      ...state.accomplishments,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'accomplishments.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.accomplishments.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    accomplishments: {
                      ...state.accomplishments,
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
          External Assistance Needed to address issues:{' '}
        </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'externalAssistanceNeeded.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'externalAssistanceNeeded.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.externalAssistanceNeeded.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    externalAssistanceNeeded: {
                      ...state.externalAssistanceNeeded,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'externalAssistanceNeeded.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.externalAssistanceNeeded.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    externalAssistanceNeeded: {
                      ...state.externalAssistanceNeeded,
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

export default CommunityPlatformProjectForm;
