import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Grid, Box, Typography, Avatar,  Menu, MenuItem, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useDispatch, useSelector } from 'react-redux';

export default function TopBar() {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.user.userDetails);

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch({ type: 'user/ME', payload: { params: {} }})
  }, []);

  useEffect(() => {
    console.log("userDetails", userDetails)
  }, [userDetails]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Grid container direction="column">
          <Grid item style={{ backgroundColor: '#444', padding: '8px 0' }}>
            <Grid container alignItems="center" justifyContent="right" spacing={2}>
              <Grid item>
                <Avatar {...stringAvatar(userDetails?.fullName || 'John Doe')} />
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
          <Grid item style={{ marginTop: '8px', marginBottom: '8px' }}>
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
                    Booking
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className="text-white"
                    component={Link}
                    onClick={handleMenuClick}
                    style={{ borderColor: 'white', color: 'white' }}
                  >
                    Settings
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    style={{width: '500px'}}
                  >
                    <MenuItem component={Link} to="/bookings/upcoming" onClick={handleMenuClose} >
                      <ListItemIcon>
                        <CalendarMonthTwoToneIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">All bookings</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/bookings/past" onClick={handleMenuClose}> 
                      <ListItemIcon>
                        <DescriptionOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">                          
                        Body Repair Bookings
                      </Typography>                  
                    </MenuItem>
                    <MenuItem component={Link} to="/bookings/cancelled" onClick={handleMenuClose}>
                      <ListItemIcon>
                        <NoteAltOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">                          
                        Mechanics Bookings
                      </Typography>                             
                    </MenuItem>
                  </Menu>
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
