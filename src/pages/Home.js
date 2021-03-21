import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  homePage: theme.spreadThis.homePage,
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.homePage}
    >
      <Grid item style={{ paddingTop: '60px' }}>
        <Typography variant='h6' align='center'></Typography>
      </Grid>
    </Grid>
  );
}
