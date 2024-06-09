import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Paper, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import actions from '../../redux/booking/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.booking.loading);
  const countBookings = useSelector((state) => state.booking.countBookings);
  
  useEffect(() => {
    dispatch({ type: 'booking/GET_COUNT_BOOKINGS' });
  }, []);

  const fields = [
    { label: 'Bookings to Invoice', value: countBookings?.bookingsToInvoice || 0, link: '/bookings' },
    { label: 'Bookings Requested', value: countBookings?.bookingsRequested || 0, link: '/bookings' },
    { label: 'Bookings On The Way', value: countBookings?.bookingsOnTheWay || 0, link: '/bookings' },
    { label: 'Bookings Booked', value: countBookings?.bookingsBooked || 0, link: '/bookings' },
  ];

  const handleOnClick = (link) => () => {
    window.location.href = link;
  }

  return (
    <Container style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', paddingTop: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <hr />
        <Grid container spacing={1} style={{ marginTop: '10px' }}>
          {fields.map((field, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box display="flex" justifyContent="center">
                <Button 
                  style={{ 
                    padding: '10px 20px', 
                    height: '40px', 
                    borderRadius: '20px', 
                    textTransform: 'none', 
                    width: '100%', 
                    borderColor: 'grey',
                    color: 'black'
                  }}
                  component={Link} 
                  onClick={handleOnClick(field.link)}
                  variant="outlined" 
                >
                  {field.label} - {field.value}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
