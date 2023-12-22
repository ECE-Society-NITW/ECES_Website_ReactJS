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
// import ToggleMode from './components/ToggleMode';


// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const App = () => {
  const { JWT, user } = useContextAuth() // import setJWT if needed
  useEffect(() => {

  }, [JWT, user])

  return (
    <>
      {/* <CssVarsProvider> */}
        {/* <ThemeProvider theme={darkTheme}> */}
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Trials" element={<Trials />} />
        </Routes>
        <SnackBar />
        {/* </ThemeProvider> */}
      {/* </CssVarsProvider> */}
    </>
  );
}

export default App;


/*
{
  open:"false",
  severity:"success",
  message:"This is a snack bar!"
}

*/