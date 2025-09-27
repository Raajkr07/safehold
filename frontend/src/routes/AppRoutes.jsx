import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Notfound from '../components/error/Error';

import LandingPage from '../landing/LandingPage';
import Working from '../pages/Working';
import Benefits from '../pages/Benefits';
import Pricing from '../pages/plans/Pricing';
import Payment from '../pages/plans/PaymentPage';
import Tutorials from '../pages/Videos';

import Logout from './Logout';
import Login from '../auth/pages/Login';
import Signup from '../auth/pages/Signup';
import ForgotPassword from '../auth/pages/ForgotPassword';
import OTP from '../auth/pages/OTP';
import ResetPassword from '../auth/pages/ResetPassword';

import Dashboard from '../app/dashboard/Dashboard';
import Ledger from '../app/pages/ledger/Ledger';
import Fund from '../app/pages/fund/Fund';
import Health from '../app/pages/health/HealthPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/not-found" element={<Notfound/>} />
      <Route path="/working" element={<Working />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/tutorials" element={<Tutorials />} />

      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path='app/dashboard' element={<Dashboard/>} />
      <Route path='app/ledger' element={<Ledger/>} />
      <Route path='app/fund' element={<Fund/>} />
      <Route path='app/health' element={<Health/>} />
      
      {/* Catch-all unwanted URL and redirect to LandingPage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;