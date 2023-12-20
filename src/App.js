import Dashboard from './pages/Dashboard';
import { useContextAuth } from './context/AuthContext';
import React, { useEffect } from 'react';
import { Avatar } from '@mui/material';
import './css/App.css';

const App = () => {
  const { JWT, user } = useContextAuth() // import setJWT if needed

  useEffect(() => {
    
  }, [JWT,user])
  
  return (
    <>
    {user && <Avatar src={user.picture}></Avatar>}
      {user.name}
      <Dashboard />
    </>
  );

}

export default App;
