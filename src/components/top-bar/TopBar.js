import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Login } from '@mui/icons-material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LogoutIcon from '@mui/icons-material/Logout';

export default function TopBar() {
  const token =localStorage.getItem('token')

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Button 
            variant="outlined"
            className="text-white border border-white py-2 px-4 mr-4 text-lg" 
            component={Link} 
            to="/"
            style={{ backgroundColor: 'transparent' }}
          >
            Home
          </Button>
        </div>
        <div>
          {token? (
          <>
            <Button variant="outlined" className="text-white ml-2" component={Link} to="/"
              onClick={() => {
                localStorage.removeItem('token')
                window.location.href = '/'
              }}
              startIcon={<LogoutIcon />}
            >
              Logout
            </Button>
          </>
          ) : (
          <>
              <Button variant="outlined" className="text-white ml-2" component={Link} to="/register"
              startIcon={<PersonAddAltIcon />}
            >
              Register
            </Button>
            <Button variant="outlined" className="text-white ml-2" component={Link} to="/login"
              startIcon={<Login />}
            > 
            Login
            </Button>
          </>
        )}
          
        </div>
      </div>
    </div>
  );
}

