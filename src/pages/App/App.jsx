import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as buoysAPI from '../../utilities/buoys-api'
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
  const [newBuoy, setNewBuoy] = useState('');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // useEffect(() => {
  //   console.log('hello world');
  // }, []);

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
              <Redirect to="/buoys" />       
              <NavBar user={user} setUser={setUser} newBuoy={newBuoy} setNewBuoy={setNewBuoy} />              
              <div className='search'>
                <SearchBar/>
              </div>
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
                <BuoyDetailPage />
              </Route>
            </>
          :
            <AuthPage setUser={setUser}/>
        }      
      </main>
    </ThemeProvider>
  );
}
