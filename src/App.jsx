import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import { useContextAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import SnackBar from "./components/SnackBar";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import EventPage from "./pages/Eventpage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { JWT, user } = useContextAuth();
  useEffect(() => {}, [JWT, user]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Event" element={<EventPage />} />
        </Routes>
        <SnackBar />
      </ThemeProvider>
    </>
  );
};

export default App;
