import React from 'react';
import { grommet } from 'grommet/themes';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Box, Grommet, Main } from 'grommet';
import Welcome from './components/Welcome/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import HttpApiProvider from './providers/HttpApiProvider';

function App() {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [idToken, setIdToken] = React.useState<string>();
  const { REACT_APP_API_URL } = process.env;

  React.useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const idToken = await getIdTokenClaims();
          console.dir({ idToken });
          setIdToken(idToken.__raw);
        } catch (e) {
          // eslint-disable-next-line no-undef
          console.error('error fetching token: ', e);
        }
      })();
    } else {
      // eslint-disable-next-line no-undef
      console.log('not authenticated');
    }
  }, [isAuthenticated, getIdTokenClaims, setIdToken]);
  if (!REACT_APP_API_URL) {
    return <></>;
  }

  if (isAuthenticated && idToken) {
    return (
      <Grommet theme={grommet} full>
        <BrowserRouter>
          <Box direction={'row'} fill>
            <Sidebar />
            <HttpApiProvider idToken={idToken} baseUrl={REACT_APP_API_URL}>
              <Box flex>
                <Switch>
                  <Route path={'/'} exact component={Home} />
                  <Route component={NotFound} />
                </Switch>
              </Box>
            </HttpApiProvider>
          </Box>
        </BrowserRouter>
      </Grommet>
    );
  }

  return (
    <Grommet theme={grommet} full={true}>
      <Main>
        <Welcome />
      </Main>
    </Grommet>
  );
}

export default App;
