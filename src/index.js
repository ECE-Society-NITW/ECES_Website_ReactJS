import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthState } from './context/AuthContext';

const clientId = "501179525954-ujf85hcbcr17l2e1elem6e1ra4ra55nh.apps.googleusercontent.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
const mongoose = require('mongoose');

root.render(
  <React.StrictMode>
    <AuthState>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </AuthState>
  </React.StrictMode>
);