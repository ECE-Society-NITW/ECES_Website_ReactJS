import Dashboard from './pages/Dashboard';
import { useContextAuth } from './context/AuthContext';
import React, { useEffect } from 'react';
import './css/App.css';
import Sidebar from './components/sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Trials from './components/Trials';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const { JWT, user } = useContextAuth() // import setJWT if needed

  useEffect(() => {

  }, [JWT, user])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Trials' element={<Trials/>} />
        </Routes>
      </ThemeProvider>
    </>
  );

}

export default App;
