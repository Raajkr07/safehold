import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from '../landing/LandingPage';
import Features from '../pages/Features';
import Benefits from '../pages/Benefits';
import Pricing from '../pages/Pricing';
import Tutorials from '../pages/Videos';

import Login from '../auth/pages/Login';
import Signup from '../auth/pages/Signup';
import ForgotPassword from '../auth/pages/ForgotPassword';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/tutorials" element={<Tutorials />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      
      {/* Catch-all unwanted URL and redirect to LandingPage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;