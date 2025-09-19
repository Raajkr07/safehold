import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../landing/LandingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Catch-all unwanted URL and redirect to LandingPage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;