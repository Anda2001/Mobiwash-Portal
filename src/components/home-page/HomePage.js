import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';


export default function HomePage() {
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