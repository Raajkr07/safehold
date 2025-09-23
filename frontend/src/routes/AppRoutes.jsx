import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Notfound from '../components/error/Error';

import LandingPage from '../landing/LandingPage';
import Working from '../pages/Working';
import Benefits from '../pages/Benefits';
import Pricing from '../pages/Pricing';
import Tutorials from '../pages/Videos';

import Login from '../auth/pages/Login';
import Signup from '../auth/pages/Signup';
import ForgotPassword from '../auth/pages/ForgotPassword';

import Dashboard from '../app/dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/not-found" element={<Notfound/>} />
      <Route path="/working" element={<Working />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/tutorials" element={<Tutorials />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path='app/dashboard' element={<Dashboard/>} />
      
      {/* Catch-all unwanted URL and redirect to LandingPage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;