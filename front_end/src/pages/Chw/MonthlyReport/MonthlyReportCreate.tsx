import React from 'react';
import {
  Box,
  Button,
  Form,
  FormExtendedEvent,
  FormField,
  Heading,
  Select,
  TextInput,
} from 'grommet';
import { Close, Compass } from 'grommet-icons';
import districts from '../../../api/district';
import months from '../../../api/months';
import { Redirect, useHistory } from 'react-router';
import { useHttpApi } from '../../../providers/HttpApiProvider';
import Spinner from '../../../components/Spinner/Spinner';

enum FormStatus {
  Start,
  Submit,
  Success,
  Error,
}

interface Report {
  healthEducator: string;
  ruralNurse: string;
  chw: string;
  district: string;
  month: number;
  year: number;
}

interface FormData {
  healthEducator: string;
  ruralNurse: string;
  chw: string;
  district: string;
  month: { value: number; name: string };
  year: string;
}

const emptyReport = {
  healthEducator: '',
  ruralNurse: '',
  chw: '',
  district: '',
  month: 0,
  year: 0,
};

const ChwMonthlyReportCreate = () => {
  const history = useHistory();
  const { httpClient } = useHttpApi();
  const [status, setStatus] = React.useState<FormStatus>(FormStatus.Start);
  const [report, setReport] = React.useState<Report>(emptyReport);

  const onClickClose = () => {
    history.push(`/chw/monthlyReports`);
  };

  const onSubmit = (e: FormExtendedEvent<unknown>) => {
    const value = (e.value as unknown) as FormData;
    setReport({
      healthEducator: value.healthEducator as string,
      ruralNurse: value.ruralNurse as string,
      chw: value.chw as string,
      district: value.district as string,
      month: value.month.value,
      year: parseInt(value.year) as number,
    });
    setStatus(FormStatus.Submit);
  };

  React.useEffect(() => {
    const post = async () => {
      try {
        const result = await httpClient.post(
          '/chw/monthlyReport',
          JSON.stringify(report)
        );
        setStatus(FormStatus.Success);
      } catch (e) {
        console.error(e);
        setStatus(FormStatus.Error);
      }
    };
    if (status === FormStatus.Submit) {
      post().then(() => console.log('posted'));
    }
  }, [status, report, httpClient]);

  if (status === FormStatus.Success) {
    return <Redirect to={'/chw/monthlyReports'} />;
  }

  if (status === FormStatus.Error) {
    return (
      <Box
        round
        pad={'small'}
        direction={'column'}
        margin={'small'}
        background={'white'}
        responsive={true}
        animation={['fadeIn', { type: 'slideDown', size: 'small' }]}
      >
        <Box flex={false} direction={'row-reverse'} align={'end'}>
          <Box>
            <Button icon={<Close size={'medium'} />} onClick={onClickClose} />
          </Box>
        </Box>
        <Box direction={'column'} fill>
          <Heading level={3}>Oh Snap! Something went wrong!</Heading>
          <Compass size={'large'} />
        </Box>
      </Box>
    );
  }

  if (status === FormStatus.Submit) {
    return (
      <Box
        round
        pad={'small'}
        direction={'column'}
        margin={'small'}
        background={'white'}
        responsive={true}
        animation={['fadeIn', { type: 'slideDown', size: 'small' }]}
      >
        <Box flex={false} direction={'row-reverse'} align={'end'}>
          <Box>
            <Button icon={<Close size={'medium'} />} onClick={onClickClose} />
          </Box>
        </Box>
        <Box direction={'column'} fill>
          <Heading level={3}>Saving...</Heading>
          <Spinner size={228} />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      round
      pad={'small'}
      direction={'column'}
      margin={'small'}
      background={'white'}
      responsive={true}
      animation={['fadeIn', { type: 'slideDown', size: 'small' }]}
    >
      <Box flex={false} direction={'row-reverse'} align={'end'}>
        <Box>
          <Button icon={<Close size={'medium'} />} onClick={onClickClose} />
        </Box>
      </Box>
      <Box
        direction={'row'}
        align={'center'}
        pad={{ bottom: 'small', left: 'xxsmall' }}
      >
        <Heading level={2}>Community Health Worker Monthly Report</Heading>
      </Box>
      <Box direction={'column'} fill>
        <Form onSubmit={onSubmit}>
          <FormField
            name={'healthEducator'}
            label={'District Health Educator'}
            required
          >
            <TextInput name={'healthEducator'} />
          </FormField>
          <FormField name={'chw'} label={'Community Health Worker'} required>
            <TextInput name={'chw'} />
          </FormField>
          <FormField name={'ruralNurse'} label={'Rural Health Nurse'} required>
            <TextInput name={'ruralNurse'} />
          </FormField>
          <FormField name={'district'} label={'District'} required>
            <Select options={districts} id={'district'} name={'district'} />
          </FormField>
          <FormField name={'month'} label={'Months'} required>
            <Select
              options={months}
              id={'month'}
              name={'month'}
              labelKey={'name'}
              valueKey={'value'}
            />
          </FormField>
          <FormField
            name={'year'}
            label={'Year'}
            validate={[{ regexp: /^[0-9]/i }]}
            required
          >
            <TextInput name={'year'} />
          </FormField>
          <Box flex align={'start'}>
            <Button type={'submit'} label={'Save'} primary />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default ChwMonthlyReportCreate;
