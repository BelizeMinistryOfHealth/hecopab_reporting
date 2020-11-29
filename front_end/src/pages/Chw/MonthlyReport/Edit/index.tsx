import React, { ReactNode } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  ChwMonthlyReportRecord,
  FormEvent,
  FormName,
  FormStatus,
} from '../../../../api/chws';
import { Accordion, AccordionPanel, Box, Button, Grid, Heading } from 'grommet';
import { Close } from 'grommet-icons';
import { useHttpApi } from '../../../../providers/HttpApiProvider';
import Spinner from '../../../../components/Spinner/Spinner';
import BasicInfoForm from './BasicInfoForm';
import PatientsSeenForm from './PatientsSeenForm';
import DeathsForm from './DeathsForm';
import FeverComplaintsForm from './FeverComplaintsForm';
import EmptyResults from '../../../../components/EmptyResults/EmptyResults';
import MalnutritionComplaintsForm from './MalnutritionComplaintsForm';
import DiarrheaComplaintsForm from './DiarrheaComplaintsForm';
import ColdComplaintsForm from './ColdComplaintsForm';
import FeverRashComplaintsForm from './FeverRashComplaintsForm';
import SoresRashesComplaintsForm from './SoresRashesComplaintsForm';

interface ParamTypes {
  id: string;
}

interface RichPanelProps {
  label: string;
  children: ReactNode;
}

const RichPanel = (props: RichPanelProps) => {
  const { children, label } = props;
  const [hovering, setHovering] = React.useState(false);

  const renderPanelTitle = () => (
    <Box
      direction='row'
      align='center'
      gap='xsmall'
      pad={{ horizontal: 'small' }}
    >
      <Heading level={4} color={hovering ? 'dark-1' : 'dark-3'}>
        {label}
      </Heading>
    </Box>
  );

  return (
    <AccordionPanel
      label={renderPanelTitle()}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
    >
      {children}
    </AccordionPanel>
  );
};

interface MenuItem {
  label: string;
  onClick: () => void;
}

const Scaffold = (props: {
  children: ReactNode;
  onClickClose: () => void;
  menu?: { label: string; onClick: () => void }[];
  submenu?: { label: string; items: MenuItem[] }[];
}) => {
  const { onClickClose, children, menu, submenu } = props;

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
                <Button
                  plain
                  margin={'none'}
                  label={
                    <Heading margin={'none'} level={4} color={'dark-3'}>
                      {m.label}
                    </Heading>
                  }
                  onClick={m.onClick}
                />
              ))}

              <Accordion multiple>
                {submenu?.map((m) => (
                  <RichPanel label={m.label}>
                    {m.items.map((i) => (
                      <Button
                        margin={{ left: 'small', top: 'small' }}
                        plain
                        label={i.label}
                        onClick={i.onClick}
                      />
                    ))}
                  </RichPanel>
                ))}
              </Accordion>
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
  const [, setFormOnScreen] = React.useState<FormName>(FormName.BasicInfo);
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

  const submenu = [
    {
      label: 'Complaints',
      items: [
        {
          label: 'Malnutrition',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsMalnutrition,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Diarrhea',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsDiarrhea,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Cold',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsCold,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Fever/Rash',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsFeverRash,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Fever',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsFever,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Sores & Rashes',
          onClick: () =>
            setFormEvent({
              name: FormName.ComplaintsSoresRashes,
              status: FormStatus.Start,
            }),
        },
      ],
    },
  ];
  if (formEvent.name === FormName.BasicInfo && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
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
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
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
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
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

  if (formEvent.name === FormName.ComplaintsFever && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <FeverComplaintsForm
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

  if (formEvent.name === FormName.ComplaintsMalnutrition && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <MalnutritionComplaintsForm
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
  if (formEvent.name === FormName.ComplaintsDiarrhea && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <DiarrheaComplaintsForm
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

  if (formEvent.name === FormName.ComplaintsCold && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <ColdComplaintsForm
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

  if (formEvent.name === FormName.ComplaintsFeverRash && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <FeverRashComplaintsForm
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

  if (formEvent.name === FormName.ComplaintsSoresRashes && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <SoresRashesComplaintsForm
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

  return (
    <Scaffold onClickClose={onClickClose}>
      <EmptyResults />
    </Scaffold>
  );
};

export default ChwMonthlyReportEdit;
