import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';
import { MonthlyReportRecord } from '../../../api/healthEducator';
import { monthName } from '../../../api/months';

export interface MonthlyReportListProps {
  reports: MonthlyReportRecord[];
}

const row = (data: MonthlyReportRecord) => {
  const { monthlyReport } = data;
  return (
    <TableRow>
      <TableCell>{monthlyReport.year}</TableCell>
      <TableCell>{monthName(monthlyReport.month)}</TableCell>
      <TableCell>{monthlyReport.district}</TableCell>
      <TableCell>{monthlyReport.facility}</TableCell>
      <TableCell>{monthlyReport.healthEducator}</TableCell>
      <TableCell>{data.createdBy}</TableCell>
    </TableRow>
  );
};

interface MonthlyReportTableProps {
  data: MonthlyReportRecord[];
}

const MonthlyReportTable = (props: MonthlyReportTableProps) => {
  const { data } = props;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell size={'xsmall'}>
            <Text weight={'bold'} size={'large'}>
              Year
            </Text>
          </TableCell>
          <TableCell size={'xsmall'}>
            <Text weight={'bold'} size={'large'}>
              Month
            </Text>
          </TableCell>
          <TableCell size={'small'}>
            <Text weight={'bold'} size={'large'}>
              District
            </Text>
          </TableCell>
          <TableCell>
            <Text weight={'bold'} size={'large'}>
              Facility
            </Text>
          </TableCell>
          <TableCell>
            <Text weight={'bold'} size={'large'}>
              Health Educator
            </Text>
          </TableCell>
          <TableCell>
            <Text weight={'bold'} size={'large'}>
              Created By
            </Text>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>{data.map((d) => row(d))}</TableBody>
    </Table>
  );
};

const MonthlyReportList = (props: MonthlyReportListProps) => {
  const { reports } = props;
  return (
    <Box
      round
      pad={'medium'}
      direction={'column'}
      margin={{ right: 'large', left: 'small' }}
      background={'white'}
      animation={['fadeIn', 'slideLeft']}
      fill
    >
      <MonthlyReportTable data={reports} />
    </Box>
  );
};

export default MonthlyReportList;
