import React, { SetStateAction } from 'react';
import { Box, FormField, Select, Text, TextInput } from 'grommet';
import months, { monthName } from '../../../api/months';
import districts from '../../../api/district';

export interface BasicInfoState {
  healthEducator: string;
  district: string;
  facility: string;
  month: number;
  year: number;
}

export interface BasicInfoFormProps {
  state: BasicInfoState;
  setter: React.Dispatch<SetStateAction<BasicInfoState>>;
}

const BasicInfoForm = (props: BasicInfoFormProps) => {
  const { state, setter } = props;
  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Basic Information</Text>
      <FormField
        name={'healthEducator'}
        label={'District Health Educator'}
        required
      >
        <TextInput
          name={'healthEducator'}
          value={state.healthEducator}
          onChange={(e) => setter({ ...state, healthEducator: e.target.value })}
        />
      </FormField>
      <FormField name={'district'} label={'District'} required>
        <Select
          options={districts}
          id={'district'}
          name={'district'}
          value={state.district}
          onChange={(e) => setter({ ...state, district: e.value })}
        />
      </FormField>
      <FormField name={'facility'} label={'Facility'} required>
        <TextInput
          name={'facility'}
          value={state.facility}
          onChange={(e) => setter({ ...state, facility: e.target.value })}
        />
      </FormField>
      <FormField name={'month'} label={'Month'} required>
        <Select
          options={months}
          id={'month'}
          name={'month'}
          labelKey={'name'}
          valueKey={'value'}
          value={{ value: state.month, name: monthName(state.month) }}
          onChange={(e) => setter({ ...state, month: e.value.value })}
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
          value={state.year}
          onChange={(e) => {
            if (e.target.value.trim().length > 0) {
              setter({ ...state, year: parseInt(e.target.value) });
            }
          }}
        />
      </FormField>
    </Box>
  );
};

export default BasicInfoForm;
