import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import TopBar from './components/top-bar/TopBar';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/home-page/HomePage';
import { useSelector } from 'react-redux';
import Bookings from './components/bookings';
import CustomDrawer from './components/drawer';

export default function App() {
  const user = useSelector(state => state.user)

  return (
      <Router>
          <TopBar />  
          <CustomDrawer />
            <Routes>
              <Route element={<PrivateRoutes />} >
                <Route path="/bookings" element={<Bookings />} />
              </Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
      </Router>
  );
}

const PrivateRoutes = () => {
  //take token from local storage
  const token =localStorage.getItem('token')

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
 
}