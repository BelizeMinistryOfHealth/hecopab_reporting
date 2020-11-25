import { Box } from 'grommet';
import { Add } from 'grommet-icons';
import React from 'react';

const AddActionButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box onClick={onClick}>
      <Add size={'medium'} />
    </Box>
  );
};

export default AddActionButton;
