import React, { ReactNode } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  ChwMonthlyReportRecord,
  FormEvent,
  FormName,
  FormStatus,
} from '../../../../api/chws';
import { Box, Button, Grid, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import { useHttpApi } from '../../../../providers/HttpApiProvider';
import Spinner from '../../../../components/Spinner/Spinner';
import BasicInfoForm from './BasicInfoForm';
import PatientsSeenForm from './PatientsSeenForm';
import DeathsForm from './DeathsForm';

interface ParamTypes {
  id: string;
}

const Scaffold = (props: {
  children: ReactNode;
  onClickClose: () => void;
  menu?: { label: string; onClick: () => void }[];
}) => {
  const { onClickClose, children, menu } = props;
  return (
    <Box
      pad={'small'}
      direction={'column'}
      margin={'none'}
      background={'light-3'}
      fill
    >
      <Box
        round
        pad={'medium'}
        direction={'column'}
        margin={{ right: 'large', left: 'small' }}
        background={'white'}
        animation={['fadeIn', 'slideLeft']}
        fill
      >
        <Box
          direction={'row'}
          align={'center'}
          pad={{ bottom: 'small', left: 'xxsmall' }}
        >
          <Heading level={2}>Community Health Worker Monthly Report</Heading>
        </Box>
        <Box direction={'column'} fill>
          <Grid
            rows={['auto']}
            columns={['3/4', '1/4']}
            areas={[['main', 'menu']]}
            gap={'small'}
            fill
          >
            <Box round background={'light-2'} gridArea={'main'} fill>
              <Box flex={false} direction={'row-reverse'} align={'end'}>
                <Box>
                  <Button
                    icon={<Close size={'medium'} />}
                    onClick={onClickClose}
                  />
                </Box>
              </Box>
              {children}
            </Box>
            <Box
              round
              background={'light-5'}
              gridArea={'menu'}
              direction={'column'}
              pad={{ top: 'small', left: 'large' }}
              gap={'medium'}
              justify={'start'}
              fill
            >
              {menu?.map((m) => (
                <Button plain label={m.label} onClick={m.onClick} />
              ))}
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const ChwMonthlyReportEdit = () => {
  const history = useHistory();
  const { httpClient } = useHttpApi();
  const { id } = useParams<ParamTypes>();
  const [status, setStatus] = React.useState<FormStatus>(FormStatus.Loading);
  const [formOnScreen, setFormOnScreen] = React.useState<FormName>(
    FormName.BasicInfo
  );
  const [formEvent, setFormEvent] = React.useState<FormEvent>({
    name: FormName.BasicInfo,
    status: FormStatus.Start,
  });
  const [report, setReport] = React.useState<ChwMonthlyReportRecord>();

  const onClickClose = () => {
    history.push('/chw/monthlyReports');
  };

  // Fetch the report
  React.useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await httpClient.get(`/chw/monthlyReport/${id}`);
        setReport(result);
        setStatus(FormStatus.Start);
        setFormOnScreen(FormName.BasicInfo);
      } catch (e) {
        console.error(e);
        setStatus(FormStatus.Error);
      }
    };
    if (status === FormStatus.Loading) {
      fetchReport();
    }
  }, [id, status, httpClient]);

  //Save the report
  React.useEffect(() => {
    const post = async () => {
      try {
        await httpClient.put('/chw/monthlyReport', JSON.stringify(report));
        setFormEvent({ ...formEvent, status: FormStatus.Success });
      } catch (e) {
        console.error(e);
        setFormEvent({ ...formEvent, status: FormStatus.Error });
      }
    };
    if (formEvent?.status === FormStatus.Submit) {
      post();
    }
  }, [httpClient, formEvent, report]);

  if (status === FormStatus.Loading) {
    return (
      <Scaffold onClickClose={onClickClose}>
        <Spinner size={228} />
      </Scaffold>
    );
  }
  const menu = [
    {
      label: 'Basic Info',
      onClick: () =>
        setFormEvent({ name: FormName.BasicInfo, status: FormStatus.Start }),
    },
    {
      label: 'Patients Seen',
      onClick: () =>
        setFormEvent({ name: FormName.PatientsSeen, status: FormStatus.Start }),
    },
    {
      label: 'Deaths',
      onClick: () =>
        setFormEvent({ name: FormName.Deaths, status: FormStatus.Start }),
    },
    {
      label: 'Births',
      onClick: () =>
        setFormEvent({ name: FormName.Births, status: FormStatus.Start }),
    },
  ];
  if (formEvent.name === FormName.BasicInfo && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu}>
        <BasicInfoForm
          report={report}
          updateFn={(r) => setReport(r)}
          onSubmit={() => {
            setFormEvent({ ...formEvent, status: FormStatus.Submit });
          }}
          formEvent={formEvent}
        />
      </Scaffold>
    );
  }

  if (formEvent.name === FormName.PatientsSeen && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu}>
        <PatientsSeenForm
          report={report}
          updateFn={(r) => setReport(r)}
          onSubmit={() => {
            setFormEvent({ ...formEvent, status: FormStatus.Submit });
          }}
          formEvent={formEvent}
        />
      </Scaffold>
    );
  }

  if (formEvent.name === FormName.Deaths && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu}>
        <DeathsForm
          report={report}
          updateFn={setReport}
          onSubmit={() =>
            setFormEvent({ ...formEvent, status: FormStatus.Submit })
          }
          formEvent={formEvent}
        />
      </Scaffold>
    );
  }

  return <Scaffold onClickClose={onClickClose}>Form goes here....</Scaffold>;
};

export default ChwMonthlyReportEdit;
