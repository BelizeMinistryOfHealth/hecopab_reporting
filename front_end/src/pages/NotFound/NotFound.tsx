import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Halt } from 'grommet-icons';

const NotFound = () => {
  return (
    <Box fill align='center' pad={{ top: 'large', horizontal: 'small' }}>
      <Halt size={'large'} />
      <Heading textAlign={'center'} level={'2'}>
        Oh, snap!
      </Heading>
      <Paragraph textAlign='center' color='dark-4'>
        The Page you requested does not exist or has been removed.
      </Paragraph>
    </Box>
  );
};

export default NotFound;
