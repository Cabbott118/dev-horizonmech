import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: theme.spreadThis.footer,
  footerItem: theme.spreadThis.footerItem,
  footerText: theme.spreadThis.footerText,
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.footer}
      >
        <Grid item>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Grid item>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
              >
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
              >
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
              >
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
              >
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>{' '}
                </Grid>
                <Grid item className={classes.footerItem}>
                  <Typography variant='body2' className={classes.footerText}>
                    Footer Item
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='overline'>
            Copyright &copy; 2021 Horizon Mechanical Co.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
