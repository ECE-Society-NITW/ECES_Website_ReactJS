import Dashboard from './pages/Dashboard';
import { useContextAuth } from './context/AuthContext';
import React, { useEffect } from 'react';
import { Avatar } from '@mui/material';
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
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* {user && <Avatar src={user.picture}></Avatar>} */}
        {/* {user.name} */}
        <Sidebar />
        <Dashboard />
      </ThemeProvider>
    </>
  );

}

export default App;
