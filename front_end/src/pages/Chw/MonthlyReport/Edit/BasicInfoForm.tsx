import React from 'react';
import {
  ChwMonthlyReportRecord,
  FormEvent,
  FormStatus,
} from '../../../../api/chws';
import { Box, Button, Form, FormField, Select, TextInput } from 'grommet';
import districts from '../../../../api/district';
import months, { monthName } from '../../../../api/months';
import Spinner from '../../../../components/Spinner/Spinner';

export interface BasicInfoFormProps {
  report: ChwMonthlyReportRecord;
  updateFn: (r: ChwMonthlyReportRecord) => void;
  onSubmit: () => void;
  formEvent: FormEvent;
}

const BasicInfoForm = (props: BasicInfoFormProps) => {
  const { report, updateFn, onSubmit, formEvent } = props;


  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box direction={'column'} fill>
      <Form onSubmit={onSubmit}>
        <FormField
          name={'healthEducator'}
          label={'District Health Educator'}
          required
        >
          <TextInput
            name={'healthEducator'}
            value={report.report.healthEducator}
            onChange={(e) =>
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  healthEducator: e.currentTarget.value,
                },
              })
            }
          />
        </FormField>
        <FormField name={'chw'} label={'Community Health Worker'} required>
          <TextInput
            name={'chw'}
            value={report.report.chw}
            onChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  chw: e.currentTarget.value,
                },
              });
            }}
          />
        </FormField>
        <FormField name={'ruralNurse'} label={'Rural Health Nurse'} required>
          <TextInput
            name={'ruralNurse'}
            value={report.report.ruralNurse}
            onChange={(e) => {
              updateFn({
                ...report,
                report: { ...report.report, ruralNurse: e.currentTarget.value },
              });
            }}
          />
        </FormField>
        <FormField name={'district'} label={'District'} required>
          <Select
            options={districts}
            id={'district'}
            name={'district'}
            value={report.report.district}
            onChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  district: e.currentTarget.value,
                },
              });
            }}
          />
        </FormField>
        <FormField name={'month'} label={'Months'} required>
          <Select
            options={months}
            id={'month'}
            name={'month'}
            labelKey={'name'}
            valueKey={'value'}
            value={{
              value: report.report.month,
              name: monthName(report.report.month),
            }}
            onChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  month: e.value.value,
                },
              });
            }}
          />
        </FormField>
        <FormField
          name={'year'}
          label={'Year'}
          validate={[{ regexp: /^[0-9]/i }]}
          required
        >
          <TextInput
            name={'year'}
            value={report.report.year}
            onChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  year: parseInt(e.currentTarget.value),
                },
              });
            }}
          />
        </FormField>
        <Box flex align={'start'}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default BasicInfoForm;
