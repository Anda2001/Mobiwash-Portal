import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function TopBar() {
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
          <Button variant="outlined" className="text-white ml-2" component={Link} to="/register">Register</Button>
          <Button variant="outlined" className="text-white ml-2" component={Link} to="/login">Login</Button>
        </div>
      </div>
    </div>
  );
}

