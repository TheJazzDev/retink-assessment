import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Protected = () => {
  const { user } = useAuthContext();
  
  return user ? <Outlet /> : <Navigate to='login' />;
};

export default Protected;
