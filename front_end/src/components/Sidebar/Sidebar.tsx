import React, { Component } from 'react';
import { Box, Button, Text } from 'grommet';

export class Sidebar extends Component {
  render() {
    // @ts-ignore
    const { ...rest } = this.props;
    return (
      <Box
        fill='vertical'
        width='small'
        background='dark-2'
        elevation='xlarge'
        {...rest}
      >
        <Button label={'Home'} />
        <Box flex overflow='auto'>
          <Text>Hello</Text>
        </Box>
      </Box>
    );
  }
}
