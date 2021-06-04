import React, { useEffect } from 'react';

// Components
import LoadingSpinner from './LoadingSpinner';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeData } from '../redux/actions/employeeActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 750,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function EmployeeList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);

  return (
    <>
      {data.loading ? (
        <LoadingSpinner loading={true} />
      ) : (
        <>
          {data.employees.map((emp) => (
            <Grid
              item
              style={{ padding: '20px 5px 0px 5px' }}
              key={emp.employeeId}
            >
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <div className={classes.image}>
                        <img
                          className={classes.img}
                          alt='headshot'
                          src={emp.imageUrl}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction='column' spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant='h6'>
                            {emp.firstName} {emp.lastName}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            {emp.role}
                          </Typography>
                          <Typography variant='body2' color='textSecondary'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant='body2'
                            style={{ cursor: 'pointer' }}
                          >
                            {emp.contactEmail} • {emp.contactPhoneNumber}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle1'></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          ))}
        </>
      )}
    </>
  );
}
