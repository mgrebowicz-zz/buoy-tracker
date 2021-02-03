import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SearchBar from '../../components/SearchBar/SearchBar';
import BuoyDetailPage from '../BuoyDetailPage/BuoyDetailPage';
import FavoriteBuoysPage from '../FavoriteBuoysPage/FavoriteBuoysPage';
import BuoyIndexPage from '../BuoyIndexPage/BuoyIndexPage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [newBuoy, setNewBuoy] = useState(null);
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
            <SearchBar newBuoy={newBuoy} setNewBuoy={setNewBuoy}/>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/favorites">
                <FavoriteBuoysPage user={user} setUser={setUser} />
              </Route>
              <Route path="/buoys">
                <BuoyIndexPage />
              </Route>
              <Route path="/details">
                <BuoyDetailPage newBuoy={newBuoy} setNewBuoy={setNewBuoy} />
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
