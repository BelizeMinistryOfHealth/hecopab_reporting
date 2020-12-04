import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, FormField, Heading, TextInput } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';

const BirthsForm = (props: ChwEditFormProps) => {
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
      <Heading level={2}>Births</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <FormField label={'Females'} name={'female'}>
            <TextInput
              name={'female'}
              value={report.report.births.female}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    births: {
                      ...report.report.births,
                      female: readEventValueAsNum(e),
                    },
                  },
                });
              }}
            />
          </FormField>
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large' }}
        >
          <FormField label={'Males'} name={'male'}>
            <TextInput
              name={'male'}
              value={report.report.births.male}
              onChange={(e) => {
                updateFn({
                  ...report,
                  report: {
                    ...report.report,
                    births: {
                      ...report.report.births,
                      male: readEventValueAsNum(e),
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

export default BirthsForm;
