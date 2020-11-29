import React, { ReactNode } from 'react';
import { MonthlyReportRecord } from '../../../api/healthEducator';
import { useHttpApi } from '../../../providers/HttpApiProvider';
import { Box, Form, Text, TextInput } from 'grommet';
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
  onSearch: (year: number) => void;
}

const Scaffold = (props: ScaffoldProps) => {
  const { onClickNew, children, onSearch } = props;
  const [yearToSearch, setYearToSearch] = React.useState<string>();

  return (
    <Box background={'light-3'} fill>
      <AppHeader
        label={'Health Educator Monthly Reports'}
        actionComponent={<AddActionButton onClick={onClickNew} />}
      />
      <Box flex overflow='auto' gap='medium' pad='medium'>
        <Form
          onSubmit={() => {
            if (yearToSearch !== undefined) {
              try {
                const yr = parseInt(yearToSearch);
                onSearch(yr);
              } catch (e) {
                console.error('invalid year');
              }
            }
          }}
        >
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
            <TextInput
              plain
              placeholder={'Search by Year'}
              type={'search'}
              onChange={(e) => setYearToSearch(e.currentTarget.value)}
            />
          </Box>
        </Form>
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

interface SearchParam {
  year: number;
  loading: boolean;
  error?: Error;
}

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
  const [searchParam, setSearchParam] = React.useState<SearchParam>({
    year: 2020,
    loading: false,
  });

  const onSearch = (year: number) => {
    setSearchParam({ year, loading: true });
  };

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
      let url = '/educator/monthlyReport';
      try {
        if (searchParam.loading && searchParam.year) {
          url = `${url}?year=${searchParam.year}`;
        }
        const results: MonthlyReportRecord[] = await httpClient.get(url);
        setReports({
          reports: results,
          loading: false,
          error: undefined,
        });
        setSearchParam({ ...searchParam, loading: false });
      } catch (e) {
        setReports({
          reports: [],
          loading: false,
          error: e,
        });
      }
    };
    if (reports.loading || searchParam.loading) {
      fetchReports().then(() =>
        console.log('fetched health educator monthly reports')
      );
    }
  }, [httpClient, reports, searchParam]);

  if (reports.loading || searchParam.loading) {
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
      <Scaffold onClickNew={onClickNew} onSearch={onSearch}>
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
      <Scaffold onClickNew={onClickNew} onSearch={onSearch}>
        <MonthlyReportEdit
          report={editReport}
          saveReport={onUpdateReport}
          onClickClose={onClickNewClose}
        />
      </Scaffold>
    );
  }

  return (
    <Scaffold onClickNew={onClickNew} onSearch={onSearch}>
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
