import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, Box, Typography, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


export default function TopBar() {
  // Assuming you get the user's name from somewhere
  const userName = "John Doe";
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  console.log("userDetails", userDetails)

  useEffect(() => {
    dispatch({ type: 'user/ME', payload: { params: {} }})
  }, []);

  useEffect(() => {
    console.log("userDetails", userDetails)
  }, [userDetails]);


  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Grid container direction="column">
          <Grid item style={{ backgroundColor: '#444', padding: '8px 0' }}>
            <Grid container alignItems="center" justifyContent="right" spacing={2}>
              
              <Grid item>
                <Avatar {...stringAvatar(userDetails?.fullName  || 'John Doe')} />
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ color: 'white' }}>
                  {userDetails.fullName || 'John Doe'}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className="text-white"
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/';
                  }}
                  startIcon={<LogoutIcon />}
                  style={{ borderColor: 'white', color: 'white' }}
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: '4px' }}>
            <Box sx={{ flexGrow: 1, pl: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="outlined"
                    className="text-white"
                    component={Link}
                    to="/dashboard"
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Dashboard
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className="text-white"
                    component={Link}
                    to="/calendar"
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Calendar
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className="text-white"
                    component={Link}
                    to="/bookings"
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Bookings
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className="text-white"
                    component={Link}
                    to="/settings"
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Settings
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
