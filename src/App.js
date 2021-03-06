import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// MUI imports
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

// Components & Pages
import Nav from './components/Nav';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FourOhFour from './pages/FourOhFour';

// Utility
import themeFile from './util/theme';
const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.replace('/');
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className='App'>
          <Router>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route path='/404' component={FourOhFour} />
              <Redirect to='/404' />
            </Switch>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
