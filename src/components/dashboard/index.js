import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import actions from '../../redux/booking/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.booking.loading);
  const countBookings = useSelector((state) => state.booking.countBookings);
  
  const fields = [
    'Bookings to Access - 69',
    'Bookings to Inspect - 1',
    'Bookings Inspected - 1',
    'Bookings to Book - 0',
    'Bookings to Book - Customer Contacted - 1',
    'Job Completed - 10'
  ];


  useEffect(() => {
    dispatch({ type: 'booking/GET_COUNT_BOOKINGS' });
  }, []);
  
  return (
    <Container style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', paddingTop: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <hr />
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {fields.map((field, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={2} style={{ padding: '12px', textAlign: 'center', borderRadius: '8px' }}>
                <Typography variant="subtitle1">
                  {field}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
