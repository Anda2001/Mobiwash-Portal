import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import actions from '../../redux/booking/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  // Use useSelector to get data from the Redux store
  const user = useSelector((state) => state.user);
  const bookings = useSelector((state) => state.booking.bookings);
  const loading = useSelector((state) => state.booking.loading);

  useEffect(() => {
    dispatch({ type: 'USER_FETCH_REQUESTED' });
    dispatch({ type: actions.GET_BOOKINGS, payload: { params: {} }})
  }, []);


  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to the Homepage
        </Typography>
        <Slider defaultValue={30} className="my-4" />

        {/* Display fetched data */}
        {loading && <Typography variant="body1">Loading...</Typography>}
        {user && (
          <div>
            <Typography variant="h6">User Info</Typography>
            <Typography variant="body1">{user.fact}</Typography>
          </div>
        )}
        {bookings && Array.isArray(bookings)  &&
          (
          <div>
            <Typography variant="h6">Bookings</Typography>
            {bookings.map((booking) => (
              <div key={booking.id}>
                <Typography variant="body1">{booking.address}</Typography>
              </div>
            ))}
              
            AAAAAA
          </div>
        )}
      </div>
    </Container>
  );
}
