import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteAuthGuard } from './RouteAuthGuard';
import { Home } from './components/pages/Home';
import { RegisterBook } from './components/pages/RegisterBook';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { ErrorPage } from './components/pages/ErrorPage';
import { ForgotPassword } from './components/pages/ForgotPassword';
import { ResetPassword } from './components/pages/ResetPassword';
import { Account } from './components/pages/Account';

const AppRoutes = () => {
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <RouteAuthGuard>
              <Home />
            </RouteAuthGuard>
          }
        />
        <Route
          path="book"
          element={
            <RouteAuthGuard>
              <RegisterBook />
            </RouteAuthGuard>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="password-reset/*" element={<ResetPassword />} />
        <Route
          path="account"
          element={
            <RouteAuthGuard>
              <Account />
            </RouteAuthGuard>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
