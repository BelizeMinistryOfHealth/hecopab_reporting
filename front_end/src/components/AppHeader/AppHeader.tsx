import React, { ReactNode } from 'react';
import { Box, Text } from 'grommet';

export interface AppHeaderProps {
  label: string;
  actionComponent: ReactNode;
}

const AppHeader = (props: AppHeaderProps) => {
  return (
    <Box
      flex={false}
      tag={'header'}
      direction={'row'}
      background={'white'}
      align={'center'}
      justify={'between'}
      responsive={false}
    >
      <Box
        pad={{ horizontal: 'medium', vertical: 'small' }}
        responsive={false}
        direction='row'
        align='center'
        gap='small'
      >
        <Text>{props.label}</Text>
      </Box>
      <Box
        margin={{ left: 'medium' }}
        round='xsmall'
        background={{ color: 'white', opacity: 'weak' }}
        direction='row'
        align='center'
        pad={{ horizontal: 'small' }}
      >
        {props.actionComponent}
      </Box>
    </Box>
  );
};

export default AppHeader;
