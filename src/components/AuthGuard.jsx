// src/components/AuthGuard.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../utils/supabaseClient';

export const AuthGuard = ({ children }) => {
  const location = useLocation();
  // Simple localStorage check for now
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  console.log("AuthGuard check:", { isAuthenticated });
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  return children;
};