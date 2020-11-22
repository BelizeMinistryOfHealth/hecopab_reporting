import React from 'react';
import { Box, Heading } from 'grommet';

const Home = () => {
  return (
    <Box align={'center'} pad={{ top: 'large', horizontal: 'small' }} fill>
      <Box flex align='center' overflow='auto'>
        <Heading textAlign={'center'} level={'2'}>
          Hecopab Reporting App
        </Heading>
      </Box>
    </Box>
  );
};

export default Home;
