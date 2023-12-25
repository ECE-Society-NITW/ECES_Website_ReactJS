import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import { useContextAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import SnackBar from './components/SnackBar';
import { CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';

const App = () => {
  const { JWT, user } = useContextAuth()
  useEffect(() => {

  }, [JWT, user])

  return (
    <>
        <CssBaseline />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
        </Routes>
        <SnackBar />
    </>
  );
}

export default App;