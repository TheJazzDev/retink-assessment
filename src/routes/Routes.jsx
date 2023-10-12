import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx';
import ProtectedRoute from '../guards/ProtectedRoute.jsx';
import AuthGuard from '../guards/authGuard.jsx';
import App from '../App.jsx';
import Home from '../pages/Home';
import Login from '../pages/Login';

const routes = createRoutesFromElements(
  <Route
    path=''
    element={
      <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </React.StrictMode>
    }>
    <Route path='login' element={<AuthGuard />}>
      <Route index element={<Login />} />
    </Route>
    <Route path='/' element={<ProtectedRoute />}>
      <Route index element={<Home />} />
    </Route>
  </Route>
);

export default routes;
