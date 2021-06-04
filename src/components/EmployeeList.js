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

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeData } from '../redux/actions/employeeActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 150,
    objectFit: 'cover',
  },
});

export default function EmployeeList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);
  console.log(data);

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
              <Card className={classes.root}>
                <div>
                  <CardMedia
                    className={classes.media}
                    image={emp.imageUrl}
                    title='headshot'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      {emp.firstName} {emp.lastName}
                    </Typography>
                    <Typography variant='body2'>{emp.role}</Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </>
      )}
    </>
  );
}
