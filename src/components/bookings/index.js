import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Typography, Grid, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Dashboard() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.booking.loading);
  const bookings = useSelector((state) => state.booking.bookings);

  const [filters, setFilters] = useState({
    bookingStatus: '',
    partsStatus: '',
    postcode: '',
    client: '',
    duration: ''
  });

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null
  });

  useEffect(() => {
    dispatch({ type: 'booking/GET_BOOKINGS' });
  }, [dispatch]);

  const columns = [
    { field: 'registration', headerName: 'Registration', width: 150 },
    { field: 'status', headerName: 'Booking Status', width: 150 },
    { field: 'startTime', headerName: 'Booking Date', width: 180 },
    { field: 'duration', headerName: 'Repair Duration', width: 150 },
    { field: 'revenue', headerName: 'Revenue', width: 180 },
    { field: 'postCode', headerName: 'Postcode', width: 120 },
    { field: 'clientName', headerName: 'Client Name', width: 180 },
    { field: 'providerName', headerName: 'Provider Name', width: 180 },
    { field: 'customerName', headerName: 'Customer Name', width: 180 },
    { field: 'customerContactNumber', headerName: 'Customer Contact Number', width: 200 },
  ];

  const rows = bookings.map((booking) => ({
    id: booking.id,
    registration: booking.registration,
    status: booking.status,
    startTime: new Date(booking.startTime).toLocaleDateString(),
    duration: booking.duration,
    revenue: 0, //booking.payments.reduce((sum, payment) => sum + payment.amount, 0),
    postCode: booking.postcode,
    clientName: booking.client.name,
    providerName: booking.providerName,
    customerName: booking.customerName,
    customerContactNumber: booking.customerContactNumber,
  }));

  return (
    <Container style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', paddingTop: '10px' }}>
        <Typography variant="h5" gutterBottom>
          Bookings
        </Typography>
        <hr />
        <Grid container spacing={2} style={{ marginBottom: '10px' }}>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Booking Status"
              select
              SelectProps={{ native: true }}
              value={filters.bookingStatus}
              onChange={(e) => setFilters({ ...filters, bookingStatus: e.target.value })}
              fullWidth
            >
              <option value=""></option>
              {/* Add booking status options here */}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Client"
              value={filters.client}
              onChange={(e) => setFilters({ ...filters, client: e.target.value })}
              fullWidth
            />
          </Grid>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
  <Grid container spacing={1} style={{ marginBottom: '10px', justifyContent: 'flex-end' }}>
    <Grid item xs={12} sm={6} md={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Typography variant="body1">From:</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <DatePicker
        label="Enter start date"
        value={dateRange.startDate}
        onChange={(date) => setDateRange({ ...dateRange, startDate: date })}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </Grid>
    <Grid item xs={12} sm={6} md={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Typography variant="body1">To:</Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <DatePicker
        label="Enter end date"
        value={dateRange.endDate}
        onChange={(date) => setDateRange({ ...dateRange, endDate: date })}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </Grid>
  </Grid>
</LocalizationProvider>

        {loading ? (
          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
            <Typography>Loading...</Typography>
          </Grid>
        ) : bookings && bookings.length === 0 ? (
          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
            <Typography>No bookings found</Typography>
          </Grid>
        ) : (
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </div>
        )}
      </Paper>
    </Container>
  );
}
