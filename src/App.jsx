import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import TopBar from './components/top-bar/TopBar';
import Login from './components/login';
import Register from './components/register';
import HomePage from './components/home-page/HomePage';
import { useSelector } from 'react-redux';
import Bookings from './components/bookings';
import Dashboard from './components/dashboard';

export default function App() {
  const user = useSelector(state => state.user)

  return (
      <Router>
            <Routes>
              <Route element={<PrivateRoutes />} >
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} /> {/* Catch-all route */}
            </Routes>
      </Router>
  );
}

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');

  return token ? (
    <>
      <TopBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};