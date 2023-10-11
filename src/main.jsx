import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Protected from './components/Protected.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=''
      element={
        <React.StrictMode>
          <AuthProvider>
            <NextUIProvider>
              <App />
            </NextUIProvider>
          </AuthProvider>
        </React.StrictMode>
      }>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Protected />}>
        <Route path='/' index element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
