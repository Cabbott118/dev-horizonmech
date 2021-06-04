import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import EmployeeList from '../components/EmployeeList';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
  homePageUnder: theme.spreadThis.homePageUnder,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.homePage}
      >
        <Grid item>
          <Typography variant='h5' align='center' color='secondary'>
            Aspiration through Integrity. Leadership through Service.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ padding: 30 }}>
        <Typography variant='h5' align='center' color='secondary'>
          Leadership Team
        </Typography>
      </div>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.homePageUnder}
      >
        <EmployeeList />
      </Grid>
    </>
  );
}
