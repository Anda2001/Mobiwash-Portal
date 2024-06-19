import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Paper, Typography, Box } from '@mui/material';
import moment from 'moment';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const events = [
    {
        id: 0,
        title: 'Board meeting',
        start: new Date(2024, 5, 18, 10, 0),
        end: new Date(2024, 5, 18, 12, 0),
    },
    {
        id: 1,
        title: 'Team Lunch',
        start: new Date(2024, 5, 19, 12, 0),
        end: new Date(2024, 5, 19, 13, 0),
    },
    {
        id: 2,
        title: 'Project Deadline',
        start: new Date(2024, 5, 20, 9, 0),
        end: new Date(2024, 5, 20, 17, 0),
    },
    {
        id: 3,
        title: 'Client Meeting',
        start: new Date(2024, 5, 21, 14, 0),
        end: new Date(2024, 5, 21, 15, 0),
    },
];

export default function CustomCalendar() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch events from Redux store or any other source
        dispatch({ type: 'booking/GET_COUNT_BOOKINGS' });
    }, [dispatch]);

    return (
        <Container style={{ padding: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', paddingTop: '10px' }}>
                <Typography variant="h5" gutterBottom>
                    Calendar
                </Typography>
                <hr />
                <Box style={{ height: '70vh' }}>
                    <DnDCalendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        draggableAccessor={(event) => true}
                        defaultView={Views.DAY}
                        views={{ day: true }}
                        style={{ height: '100%' }}
                    />
                </Box>
            </Paper>
        </Container>
    );
}
