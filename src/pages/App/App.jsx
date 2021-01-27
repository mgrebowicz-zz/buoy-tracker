import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import FavoriteBuoysPage from '../FavoriteBuoysPage/FavoriteBuoysPage';
import BuoyIndexPage from '../BuoyIndexPage/BuoyIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  const [user, setUser] = useState(getUser());
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">
        { user ?
            <>         
              <NavBar user={user} setUser={setUser} />
              <Switch>
                <Route path="/favorites">
                <FavoriteBuoysPage user={user} setUser={setUser} />
                </Route>
                <Route path="/buoys">
                  <BuoyIndexPage />
                </Route>
                <Redirect to="/buoys" />
              </Switch>
            </>
          :
            <AuthPage setUser={setUser}/>
        }      
      </main>
    </ThemeProvider>
  );
}
