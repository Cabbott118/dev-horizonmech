import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  fourOhFourPage: theme.spreadThis.fourOhFourPage,
  button: theme.spreadThis.button,
}));

function onClick() {
  window.location.replace('/');
}

export default function FourOhFour() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.fourOhFourPage}
    >
      <Grid item>
        <Typography variant='h3' color='primary' align='center'>
          Error Code: 404
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant='outlined'
          color='secondary'
          onClick={onClick}
          fullwidth
          style={{ marginTop: '10px' }}
          className={classes.button}
        >
          Home
        </Button>
      </Grid>
    </Grid>
  );
}
