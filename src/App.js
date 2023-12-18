import Dashboard from './pages/Dashboard';
import { useContextAuth } from './context/AuthContext';
import React, { useEffect } from 'react';
import './css/App.css';

const App = () => {
  const { JWT } = useContextAuth() // import setJWT if needed

  useEffect(() => {

  }, [JWT])

  return (
    <>
      <Dashboard />
    </>
  );

}

export default App;
