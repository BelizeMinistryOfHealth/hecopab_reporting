import React, { ReactNode } from 'react';
import { MonthlyReportRecord } from '../../../api/healthEducator';
import { useHttpApi } from '../../../providers/HttpApiProvider';
import { Box, Text, TextInput } from 'grommet';
import Spinner from '../../../components/Spinner/Spinner';
import AppHeader from '../../../components/AppHeader/AppHeader';
import { Search } from 'grommet-icons';
import EmptyResults from '../../../components/EmptyResults/EmptyResults';
import AddActionButton from '../../../components/AddActionButton/AddActionButton';
import MonthlyReportCreate from './MonthlyReportCreate';
import MonthlyReportList from './MonthlyReportList';
import MonthlyReportEdit from './MonthlyReportEdit';

export interface MonthlyReportRecordState {
  reports: MonthlyReportRecord[];
  loading: boolean;
  error: Error | undefined;
}

interface ScaffoldProps {
  onClickNew: () => void;
  children: ReactNode;
}
const Scaffold = (props: ScaffoldProps) => {
  const { onClickNew, children } = props;
  return (
    <Box background={'light-3'} fill>
      <AppHeader
        label={'Health Educator Monthly Reports'}
        actionComponent={<AddActionButton onClick={onClickNew} />}
      />
      <Box flex overflow='auto' gap='medium' pad='medium'>
        <Box
          flex={false}
          overflow='auto'
          round='large'
          background={{ color: 'dark-5', opacity: 'weak' }}
          direction='row'
          align='center'
          pad={{ horizontal: 'medium', vertical: 'small' }}
          margin={{ horizontal: 'medium', top: 'medium' }}
        >
          <Search color={'brand'} />
          <TextInput plain placeholder={'Search by Year'} type={'search'} />
        </Box>
        <Box
          flex={false}
          direction={'row-responsive'}
          margin={{ right: 'xlarge', top: 'xxsmall' }}
          wrap
          fill
        >
          <Box gap='large' flex='grow' margin={{ top: 'small' }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const MonthlyReport = () => {
  const { httpClient } = useHttpApi();
  const [reports, setReports] = React.useState<MonthlyReportRecordState>({
    reports: [],
    loading: true,
    error: undefined,
  });
  const [openNewForm, setOpenNewForm] = React.useState(false);
  const [editReport, setEditReport] = React.useState<
    MonthlyReportRecord | undefined
  >(undefined);

  const onClickNew = () => setOpenNewForm(true);
  const onClickNewClose = () => {
    setOpenNewForm(false);
    setEditReport(undefined);
    setReports({ reports: [], loading: true, error: undefined });
  };
  const onClickEdit = (report: MonthlyReportRecord) => {
    // Make sure that the "create form" is closed.
    setOpenNewForm(false);
    setEditReport(report);
  };

  React.useEffect(() => {
    const fetchReports = async (): Promise<void> => {
      try {
        const results: MonthlyReportRecord[] = await httpClient.get(
          '/educator/monthlyReport'
        );
        setReports({
          reports: results,
          loading: false,
          error: undefined,
        });
      } catch (e) {
        setReports({
          reports: [],
          loading: false,
          error: e,
        });
      }
    };
    if (reports.loading) {
      fetchReports().then(() =>
        console.log('fetched health educator monthly reports')
      );
    }
  }, [httpClient, reports]);

  if (reports.loading) {
    return (
      <Box
        align={'center'}
        pad={'large'}
        gap={'large'}
        margin={{ top: 'large', left: 'large' }}
      >
        <Text>Loading....</Text>
        <Spinner size={448} />
      </Box>
    );
  }

  if (openNewForm) {
    return (
      <Scaffold onClickNew={onClickNew}>
        <MonthlyReportCreate onClickClose={onClickNewClose} />
      </Scaffold>
    );
  }

  const onUpdateReport = async (r: MonthlyReportRecord) => {
    await httpClient.put('/educator/monthlyReport', JSON.stringify(r));
    setEditReport(undefined);
    setReports({ loading: true, error: undefined, reports: [] });
  };

  if (editReport) {
    return (
      <Scaffold onClickNew={onClickNew}>
        <MonthlyReportEdit
          report={editReport}
          saveReport={onUpdateReport}
          onClickClose={onClickNewClose}
        />
      </Scaffold>
    );
  }

  return (
    <Scaffold onClickNew={onClickNew}>
      {reports.reports ? (
        <MonthlyReportList
          reports={reports.reports}
          onClickEdit={onClickEdit}
        />
      ) : (
        <EmptyResults />
      )}
    </Scaffold>
  );
};

export default MonthlyReport;
