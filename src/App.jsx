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
import ParticleBackground from "./components/particlesBackground";
import Teams from "./pages/Teams";

const customTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { JWT, user } = useContextAuth();
  useEffect(() => {}, [JWT, user]);

  return (
    <>
      <ParticleBackground />
      <ThemeProvider theme={customTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Events" element={<EventPage />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <SnackBar />
      </ThemeProvider>
    </>
  );
};

export default App;
