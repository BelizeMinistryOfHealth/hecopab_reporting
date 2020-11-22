import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Heading, Button } from 'grommet';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return <Button label='Sign In' onClick={loginWithRedirect} />;
  }

  return <></>;
};

const Welcome = () => {
  return (
    <Box justify={'center'} align={'center'} background={'brand'} fill>
      <Heading>Welcome to Hecopab Reporting App</Heading>
      <Box align='center' pad='medium'>
        <LoginButton />
      </Box>
    </Box>
  );
};

export default Welcome;
