import React from 'react';
import { OtherServices } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface OtherServicesFormProps {
  state: OtherServices;
}

const OtherServicesForm = (props: OtherServicesFormProps) => {
  const { state } = props;
  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Other Services</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>ORS & Zinc Distributed: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'orsZincDistributed.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'orsZincDistributed.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.orsZincDistributed.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'orsZincDistributed.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'orsZincDistributed.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.orsZincDistributed.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Number of Rapid Pregnancy Tests Done: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'rapidPregnancyTest.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'rapidPregnancyTest.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.rapidPregnancyTest.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'rapidPregnancyTest.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'rapidPregnancyTest.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.rapidPregnancyTest.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Persons requiring Glucose Monitoring: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'glucoseMonitoring.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'glucoseMonitoring.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.glucoseMonitoring.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'glucoseMonitoring.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'glucoseMonitoring.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.glucoseMonitoring.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Persons with Hyperglycemia: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hyperglycemia.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hyperglycemia.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hyperglycemia.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'hyperglycemia.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'hyperglycemia.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hyperglycemia.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Persons with Hypoglycemia: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypoglycemia.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypoglycemia.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypoglycemia.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypoglycemia.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'hypoglycemia.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypoglycemia.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Blood Pressure Monitored: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'bloodPressure.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'bloodPressure.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.bloodPressure.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'bloodPressure.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'bloodPressure.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.bloodPressure.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Persons with Hypertension: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypertension.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypertension.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypertension.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypertension.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'hypertension.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypertension.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Persons with Hypotension: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypotension.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypotension.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypotension.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypotension.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'hypotension.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.hypotension.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>First Aid Given: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'firstAid.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'firstAid.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.firstAid.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'firstAid.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'firstAid.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.firstAid.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Deaths: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'deaths.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'deaths.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.deaths.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'deaths.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'deaths.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.deaths.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Births: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'births.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'births.rural'}
              placeholder={'Rural'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.births.rural = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
          <FormField
            name={'births.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'births.urban'}
              placeholder={'Urban'}
              size={'small'}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  state.births.urban = parseInt(e.target.value);
                }
              }}
            />
          </FormField>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherServicesForm;
