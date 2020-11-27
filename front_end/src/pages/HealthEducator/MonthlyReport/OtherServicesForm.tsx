import React, { SetStateAction } from 'react';
import { OtherServices } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface OtherServicesFormProps {
  state: OtherServices;
  setter: React.Dispatch<SetStateAction<OtherServices>>;
}

const OtherServicesForm = (props: OtherServicesFormProps) => {
  const { state, setter } = props;
  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Other Services</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>ORS & Zinc Distributed: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'orsZincDistributed.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            label={<Text size={'small'}>Rural</Text>}
            pad={false}
          >
            <TextInput
              name={'orsZincDistributed.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.orsZincDistributed.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    orsZincDistributed: {
                      ...state.orsZincDistributed,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'orsZincDistributed.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.orsZincDistributed.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    orsZincDistributed: {
                      ...state.orsZincDistributed,
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
        <Text size={'small'}>Number of Rapid Pregnancy Tests Done: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'rapidPregnancyTest.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'rapidPregnancyTest.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.rapidPregnancyTest.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    rapidPregnancyTest: {
                      ...state.rapidPregnancyTest,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'rapidPregnancyTest.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.rapidPregnancyTest.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    rapidPregnancyTest: {
                      ...state.rapidPregnancyTest,
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
        <Text size={'small'}>Persons requiring Glucose Monitoring: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'glucoseMonitoring.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            label={<Text size={'small'}>Rural</Text>}
            pad={false}
          >
            <TextInput
              name={'glucoseMonitoring.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.glucoseMonitoring.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    glucoseMonitoring: {
                      ...state.glucoseMonitoring,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'glucoseMonitoring.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.glucoseMonitoring.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    glucoseMonitoring: {
                      ...state.glucoseMonitoring,
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
        <Text size={'small'}>Persons with Hyperglycemia: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hyperglycemia.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
            label={<Text size={'small'}>Rural</Text>}
          >
            <TextInput
              name={'hyperglycemia.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.hyperglycemia.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hyperglycemia: {
                      ...state.hyperglycemia,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'hyperglycemia.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.hyperglycemia.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hyperglycemia: {
                      ...state.hyperglycemia,
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
        <Text size={'small'}>Persons with Hypoglycemia: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypoglycemia.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypoglycemia.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.hypoglycemia.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypoglycemia: {
                      ...state.hypoglycemia,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypoglycemia.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.hypoglycemia.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypoglycemia: {
                      ...state.hypoglycemia,
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
        <Text size={'small'}>Blood Pressure Monitored: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'bloodPressure.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'bloodPressure.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.bloodPressure.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    bloodPressure: {
                      ...state.bloodPressure,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'bloodPressure.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.bloodPressure.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    bloodPressure: {
                      ...state.bloodPressure,
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
        <Text size={'small'}>Persons with Hypertension: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypertension.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypertension.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.hypertension.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypertension: {
                      ...state.hypertension,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypertension.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.hypertension.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypertension: {
                      ...state.hypertension,
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
        <Text size={'small'}>Persons with Hypotension: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'hypotension.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'hypotension.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.hypotension.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypotension: {
                      ...state.hypotension,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'hypotension.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.hypotension.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    hypotension: {
                      ...state.hypotension,
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
        <Text size={'small'}>First Aid Given: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'firstAid.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'firstAid.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.firstAid.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    firstAid: {
                      ...state.firstAid,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'firstAid.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.firstAid.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    firstAid: {
                      ...state.firstAid,
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
        <Text size={'small'}>Deaths: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'deaths.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'deaths.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.deaths.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    deaths: {
                      ...state.deaths,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'deaths.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.deaths.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    deaths: {
                      ...state.deaths,
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
        <Text size={'small'}>Births: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'births.rural'}
            label={<Text size={'small'}>Rural</Text>}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'births.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.births.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    births: {
                      ...state.births,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'births.urban'}
            label={<Text size={'small'}>Urban</Text>}
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
              defaultValue={state.births.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    births: {
                      ...state.births,
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

export default OtherServicesForm;
