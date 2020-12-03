import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  TextArea,
  TextInput,
} from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';

const MeetingsForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Meetings</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <FormField label={'Community Meetings'} name={'communityMeetings'}>
            <TextInput
              name={'communityMeetings'}
              value={report.report.meetings.communityMeetings}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      communityMeetings: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box align={'start'} gap={'small'} margin={{ right: 'large' }}>
          <FormField label={'Meetings Organized'} name={'meetingsOrganized'}>
            <TextInput
              name={'meetingsOrganized'}
              value={report.report.meetings.meetingsOrganized}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      meetingsOrganized: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box align={'start'} gap={'small'} margin={{ right: 'large' }}>
          <FormField label={'Training Sessions'} name={'trainingSessions'}>
            <TextInput
              name={'trainingSessions'}
              value={report.report.meetings.trainingSessions}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      trainingSessions: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box align={'start'} gap={'small'} margin={{ right: 'large' }}>
          <FormField label={'Workshops'} name={'workshops'}>
            <TextInput
              name={'workshops'}
              value={report.report.meetings.workshops}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      workshops: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box align={'start'} gap={'small'} margin={{ right: 'large' }}>
          <FormField label={'Others'} name={'other'}>
            <TextInput
              name={'other'}
              value={report.report.meetings.other}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      other: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box align={'start'} gap={'small'} margin={{ right: 'large' }}>
          <FormField label={'Comments'} name={'comments'}>
            <TextArea
              fill
              name={'comments'}
              value={report.report.meetings.comments}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    meetings: {
                      ...report.report.meetings,
                      comments: e.currentTarget.value,
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default MeetingsForm;
