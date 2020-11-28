import React from 'react';
import { ChwMonthlyReportRecord } from '../../../api/chws';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';
import { monthName } from '../../../api/months';
import { Edit } from 'grommet-icons';

const row = (
  data: ChwMonthlyReportRecord,
  onClickEdit: (r: ChwMonthlyReportRecord) => void
) => {
  const { report } = data;
  return (
    <TableRow key={data.id}>
      <TableCell>
        <Text size={'small'}>{report.year}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{monthName(report.month)}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{report.district}</Text>
      </TableCell>
      <TableCell>
        <Text size={'small'}>{report.healthEducator}</Text>
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

const MonthlyReportTable = (props: ChwMonthlyReportListProps) => {
  const { reports, onClickEdit } = props;

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
              Health Educator
            </Text>
          </TableCell>
          <TableCell>
            <Text weight={'bold'} size={'large'}>
              Created By
            </Text>
          </TableCell>
          <TableCell size={'xxsmall'} />
        </TableRow>
      </TableHeader>
      <TableBody>{reports.map((d) => row(d, onClickEdit))}</TableBody>
    </Table>
  );
};

export interface ChwMonthlyReportListProps {
  reports: ChwMonthlyReportRecord[];
  onClickEdit: (r: ChwMonthlyReportRecord) => void;
}
const ChwMonthlyReportList = (props: ChwMonthlyReportListProps) => {
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
      <MonthlyReportTable reports={reports} onClickEdit={onClickEdit} />
    </Box>
  );
};

export default ChwMonthlyReportList;
