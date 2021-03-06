import React, { ReactNode } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  ChwMonthlyReportRecord,
  FormEvent,
  FormName,
  FormStatus,
} from '../../../../api/chws';
import {
  Accordion,
  AccordionPanel,
  Box,
  Button,
  Grid,
  Heading,
  Text,
} from 'grommet';
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
import MeetingsForm from './MeetingsForm';
import HomeVisitsDutiesForm from './HomeVisitsDutiesForm';
import HealthEdHomeDutiesForm from './HealthEdHomeDutiesForm';
import HealthEdSchoolsDutiesForm from './HealthEdSchoolsDutiesForm';
import HealthEdGroupsDutiesForm from './HealthEdGroupsDutiesForm';
import BloodPressureDutiesForm from './BloodPressureDutiesForm';
import BloodSugarDutiesForm from './BloodSugarDutiesForm';
import PregnancyTestDutiesForm from './PregnancyTestDutiesForm';
import WeightHeightChecksDutiesForm from './WeightHeightChecksDutiesForm';
import OrsDistributedDutiesForm from './OrsDistributedDutiesForm';
import IncaparinaDutiesForm from './IncaparinaDutiesForm';
import ReferralsToHealthFacilitiesForm from '../../../HealthEducator/MonthlyReport/ReferralsToHealthFacilitiesForm';
import ReferralsDutiesForm from './ReferralsDutiesForm';
import CounterReferralsDutiesForm from './CounterReferralsDutiesForm';
import HealthFairsDutiesForm from './HealthFairsDutiesForm';
import FirstAidDutiesForm from './FirstAidDutiesForm';
import MobileClinicDutiesForm from './MobileClinicDutiesForm';
import RabiesDutiesForm from './RabiesDutiesForm';
import BirthsForm from './BirthsForm';

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
              fill={'horizontal'}
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
                        margin={{ left: 'small', top: 'xxsmall' }}
                        plain
                        label={<Text size={'xsmall'}>{i.label}</Text>}
                        size={'small'}
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
    {
      label: 'Meetings',
      onClick: () =>
        setFormEvent({ name: FormName.Meetings, status: FormStatus.Start }),
    },
  ];

  const submenu = [
    {
      label: 'Duties Performed',
      items: [
        {
          label: 'Home Visits',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedHomeVisits,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Health Ed At Home',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedHealthEdHome,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Health Ed In Schools',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedHealthEdSchools,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Health Ed To Different Groups',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedHealthEdGroups,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Blood Pressure Checks',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedBloodPressureChecks,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Blood Sugar Checks',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedBloodSugarChecks,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Pregnancy Tests',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedPregnancyTest,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Weight & Height Checks',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedWeightAndHeightChecks,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Ors Distributed',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedOrsDistributed,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Incaparina Distributed',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedIncaparinaDistributed,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Referrals Given',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedReferralsGiven,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Counter Referrals',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedCounterReferrals,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Health Fairs',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedHealthFairs,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'First Aid',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedFirstAid,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Mobile Clinics',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedCMobileClinics,
              status: FormStatus.Start,
            }),
        },
        {
          label: 'Rabies Campaigns',
          onClick: () =>
            setFormEvent({
              name: FormName.DutiesPerformedRabies,
              status: FormStatus.Start,
            }),
        },
      ],
    },
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

  if (formEvent.name === FormName.Meetings && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <MeetingsForm
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

  if (formEvent.name === FormName.DutiesPerformedHomeVisits && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <HomeVisitsDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedHealthEdHome && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <HealthEdHomeDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedHealthEdSchools && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <HealthEdSchoolsDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedHealthEdGroups && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <HealthEdGroupsDutiesForm
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

  if (
    formEvent.name === FormName.DutiesPerformedBloodPressureChecks &&
    report
  ) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <BloodPressureDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedBloodSugarChecks && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <BloodSugarDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedPregnancyTest && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <PregnancyTestDutiesForm
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

  if (
    formEvent.name === FormName.DutiesPerformedWeightAndHeightChecks &&
    report
  ) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <WeightHeightChecksDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedOrsDistributed && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <OrsDistributedDutiesForm
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

  if (
    formEvent.name === FormName.DutiesPerformedIncaparinaDistributed &&
    report
  ) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <IncaparinaDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedReferralsGiven && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <ReferralsDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedCounterReferrals && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <CounterReferralsDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedHealthFairs && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <HealthFairsDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedFirstAid && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <FirstAidDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedCMobileClinics && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <MobileClinicDutiesForm
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

  if (formEvent.name === FormName.DutiesPerformedRabies && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <RabiesDutiesForm
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

  if (formEvent.name === FormName.Births && report) {
    return (
      <Scaffold onClickClose={onClickClose} menu={menu} submenu={submenu}>
        <BirthsForm
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
