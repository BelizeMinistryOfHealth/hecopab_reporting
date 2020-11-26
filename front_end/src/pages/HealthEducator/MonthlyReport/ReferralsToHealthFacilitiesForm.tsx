import React, { SetStateAction } from 'react';
import { Referrals } from '../../../api/healthEducator';
import { Box, FormField, Text, TextInput } from 'grommet';

export interface ReferralsToHealthFacilitiesFormProps {
  state: Referrals;
  setter: React.Dispatch<SetStateAction<Referrals>>;
}

const ReferralsToHealthFacilitiesForm = (
  props: ReferralsToHealthFacilitiesFormProps
) => {
  const { state, setter } = props;

  return (
    <Box background={'#F7F7F7'} gap={'medium'} pad={'medium'}>
      <Text weight={'bold'}>Referrals to Health Facilities</Text>
      <Box direction={'column'} align={'start'}>
        <Text size={'small'}>Referrals for Family Planning: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'familyPlanning.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'familyPlanning.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.familyPlanning.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    familyPlanning: {
                      ...state.familyPlanning,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'familyPlanning.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'familyPlanning.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.familyPlanning.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    familyPlanning: {
                      ...state.familyPlanning,
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
        <Text size={'small'}>Referrals for Preconception Care: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'preconceptionCare.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'preconceptionCare.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.preconceptionCare.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    preconceptionCare: {
                      ...state.preconceptionCare,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'preconceptionCare.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'preconceptionCare.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.preconceptionCare.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    preconceptionCare: {
                      ...state.preconceptionCare,
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
        <Text size={'small'}>Referrals for Antenatal Care: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'antenatalCare.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'antenatalCare.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.antenatalCare.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    antenatalCare: {
                      ...state.antenatalCare,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'antenatalCare.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'antenatalCare.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.antenatalCare.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    antenatalCare: {
                      ...state.antenatalCare,
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
        <Text size={'small'}>Referrals for Postnatal Care: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'postnatalCare.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'postnatalCare.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.postnatalCare.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    postnatalCare: {
                      ...state.postnatalCare,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'postnatalCare.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'postnatalCare.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.postnatalCare.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    postnatalCare: {
                      ...state.postnatalCare,
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
        <Text size={'small'}>Referrals for Newborn Care: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'newbornCare.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'newbornCare.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.newbornCare.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    newbornCare: {
                      ...state.newbornCare,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'newbornCare.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'newbornCare.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.newbornCare.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    newbornCare: {
                      ...state.newbornCare,
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
        <Text size={'small'}>Referrals for Cervical Cancer Screening: </Text>
        <Box direction={'row'} align={'start'}>
          <FormField
            name={'cervicalCancerScreening.rural'}
            contentProps={{ direction: 'row', width: 'xsmall', align: 'start' }}
            pad={false}
          >
            <TextInput
              name={'cervicalCancerScreening.rural'}
              placeholder={'Rural'}
              size={'small'}
              defaultValue={state.cervicalCancerScreening.rural}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    cervicalCancerScreening: {
                      ...state.cervicalCancerScreening,
                      rural: parseInt(e.target.value),
                    },
                  });
                }
              }}
            />
          </FormField>
          <FormField
            name={'cervicalCancerScreening.urban'}
            contentProps={{
              direction: 'row',
              width: 'xsmall',
              align: 'center',
            }}
          >
            <TextInput
              name={'cervicalCancerScreening.urban'}
              placeholder={'Urban'}
              size={'small'}
              defaultValue={state.cervicalCancerScreening.urban}
              onBlur={(e) => {
                if (e.target.value.trim().length > 0) {
                  setter({
                    ...state,
                    cervicalCancerScreening: {
                      ...state.cervicalCancerScreening,
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

export default ReferralsToHealthFacilitiesForm;
