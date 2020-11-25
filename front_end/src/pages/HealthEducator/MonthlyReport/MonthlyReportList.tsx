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

export interface MonthlyReportListProps {
  reports: MonthlyReportRecord[];
}

const row = (data: MonthlyReportRecord) => {
  const { monthlyReport } = data;
  return (
    <TableRow>
      <TableCell>{monthlyReport.year}</TableCell>
      <TableCell>{monthlyReport.month}</TableCell>
      <TableCell>{monthlyReport.district}</TableCell>
      <TableCell>{monthlyReport.facility}</TableCell>
      <TableCell>{monthlyReport.healthEducator}</TableCell>
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
          <TableCell>Year</TableCell>
          <TableCell>Month</TableCell>
          <TableCell>District</TableCell>
          <TableCell>Facility</TableCell>
          <TableCell>Health Educator</TableCell>
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
