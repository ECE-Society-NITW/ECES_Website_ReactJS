import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import { useContextAuth } from './context/AuthContext';
import React, { useEffect } from 'react';
import './css/App.css';
import Sidebar from './components/sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* {user && <Avatar src={user.picture}></Avatar>} */}
        {/* {user.name} */}
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
        </Routes>
          
      </ThemeProvider>
      </Router>
    </>
  );

}

export default App;
