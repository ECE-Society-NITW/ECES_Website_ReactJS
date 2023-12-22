import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import { useContextAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Sidebar from './components/sidebar';
import SnackBar from './components/SnackBar';
import Trials from './components/Trials';
import { CssBaseline } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import { ModeState } from './context/modeContext';


const App = () => {
  const { JWT, user } = useContextAuth()
  useEffect(() => {

  }, [JWT, user])

  return (
    // <CssVarsProvider>
    //   <ModeState>
    <>
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Trials" element={<Trials />} />
        </Routes>
        <SnackBar />
    {/* //   </ModeState> */}
    {/* // </CssVarsProvider> */}
    </>
  );
}

export default App;