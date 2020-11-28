import React, { ReactNode } from 'react';
import { ChwMonthlyReportRecord } from '../../../api/chws';
import { useHttpApi } from '../../../providers/HttpApiProvider';
import { Box, Form, Text, TextInput } from 'grommet';
import Spinner from '../../../components/Spinner/Spinner';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AddActionButton from '../../../components/AddActionButton/AddActionButton';
import { Search } from 'grommet-icons';
import ChwMonthlyReportList from './MonthlyReportList';
import EmptyResults from '../../../components/EmptyResults/EmptyResults';
import { useHistory } from 'react-router';

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
        label={'Community Health Workers Monthly Reports'}
        actionComponent={<AddActionButton onClick={onClickNew} />}
      />
      <Box flex overflow='auto' gap='medium' pad='medium'>
        <Form
          onSubmit={() => {
            if (yearToSearch != undefined) {
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

export interface ChwMonthlyReportRecordState {
  reports: ChwMonthlyReportRecord[];
  loading: boolean;
  error: Error | undefined;
}

interface SearchParam {
  year: number;
  loading: boolean;
  error?: Error;
}

const ChwMonthlyReportPage = () => {
  const { httpClient } = useHttpApi();
  const history = useHistory();

  const [reports, setReports] = React.useState<ChwMonthlyReportRecordState>({
    reports: [],
    loading: true,
    error: undefined,
  });
  const [searchParam, setSearchParam] = React.useState<SearchParam>({
    year: 2020,
    loading: false,
  });

  const onSearch = (year: number) => {
    setSearchParam({ year, loading: true });
  };

  React.useEffect(() => {
    const fetchReports = async (): Promise<void> => {
      let url = '/chw/monthlyReport';
      try {
        if (searchParam.loading && searchParam.year) {
          url = `${url}?year=${searchParam.year}`;
        }
        const results: ChwMonthlyReportRecord[] = await httpClient.get(url);
        setReports({
          reports: results,
          loading: false,
          error: undefined,
        });
        setSearchParam({ ...searchParam, loading: false });
      } catch (e) {
        // Stop waiting for `load` if an error happens
        setReports({ reports: [], loading: false, error: e });
        setSearchParam({ ...searchParam, loading: false });
      }
    };
    if (reports.loading || searchParam.loading) {
      fetchReports().then(() => console.log('fetched chw monthly reports'));
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

  return (
    <Scaffold
      onClickNew={() => history.push('/chw/monthlyReports/new')}
      onSearch={onSearch}
    >
      {reports.reports ? (
        <ChwMonthlyReportList
          reports={reports.reports}
          onClickEdit={(r) => history.push(`/chw/monthlyReports/${r.id}`)}
        />
      ) : (
        <EmptyResults />
      )}
    </Scaffold>
  );
};

export default ChwMonthlyReportPage;
