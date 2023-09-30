import React from 'react';
import axios from 'axios';
import './App.css';
import { AuthProvider } from './context/AuthProvider';
import { AlertProvider } from './context/AlertProvider';
import AppRoutes from './AppRoutes';

const App = () => {
  axios.defaults.withCredentials = true;

  return (
    <AuthProvider>
      <AlertProvider>
        <AppRoutes />
      </AlertProvider>
    </AuthProvider>
  );
};

export default App;
