import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { blue } from '@mui/material/colors';
import actions from '../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  postCode: Yup.string().required('Post Code is required'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string().required('Phone Number is required'),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      postCode: '',
      address: '',
      phone: '',
      receivePromotions: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: actions.REGISTER,
        payload: values,
      });
    },
  });


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: blue[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="full-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="postCode"
                  label="Post Code"
                  id="postCode"
                  autoComplete="postal-code"
                  value={formik.values.postCode}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.postCode && Boolean(formik.errors.postCode)}
                  helperText={formik.touched.postCode && formik.errors.postCode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address-line1"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  id="phone"
                  autoComplete="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="receivePromotions"
                      value={formik.values.receivePromotions}
                      onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      color="primary" 
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button variant="text" onClick={() => navigate('/login')}>
                {"Already have an account? Sign in"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
