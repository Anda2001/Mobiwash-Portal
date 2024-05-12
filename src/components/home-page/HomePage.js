import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'USER_FETCH_REQUESTED' });
  }, []);


  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to the Homepage
        </Typography>
        <Slider defaultValue={30} className="my-4" />
      </div>
    </Container>
  );
}