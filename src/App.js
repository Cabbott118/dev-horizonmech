import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// MUI imports
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Components & Pages
import Nav from './components/Nav';
import Home from './pages/Home';
import FourOhFour from './pages/FourOhFour';

// Utility
import themeFile from './util/theme';
const theme = createMuiTheme(themeFile);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/404' component={FourOhFour} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
