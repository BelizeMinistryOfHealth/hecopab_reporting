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
import { Edit } from 'grommet-icons';

export interface MonthlyReportListProps {
  reports: MonthlyReportRecord[];
  onClickEdit: (r: MonthlyReportRecord) => void;
}

const row = (
  data: MonthlyReportRecord,
  onClickEdit: (r: MonthlyReportRecord) => void
) => {
  const { monthlyReport } = data;
  return (
    <TableRow key={data.id}>
      <TableCell>
        <Text size={'small'}>{monthlyReport.year}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{monthName(monthlyReport.month)}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{monthlyReport.district}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{monthlyReport.facility}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{monthlyReport.healthEducator}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{data.createdBy}</Text>
      </TableCell>
      <TableCell alignContent={'end'} onClick={() => onClickEdit(data)}>
        <Edit size={'medium'} />
      </TableCell>
    </TableRow>
  );
};

interface MonthlyReportTableProps {
  data: MonthlyReportRecord[];
  onClickEdit: (r: MonthlyReportRecord) => void;
}

const MonthlyReportTable = (props: MonthlyReportTableProps) => {
  const { data, onClickEdit } = props;
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
          <TableCell size={'xxsmall'}></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>{data.map((d) => row(d, onClickEdit))}</TableBody>
    </Table>
  );
};

const MonthlyReportList = (props: MonthlyReportListProps) => {
  const { reports, onClickEdit } = props;
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
      <MonthlyReportTable data={reports} onClickEdit={onClickEdit} />
    </Box>
  );
};

export default MonthlyReportList;
