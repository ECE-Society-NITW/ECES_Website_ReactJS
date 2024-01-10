import { Snackbar, Alert, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useContextSnackBar } from "../context/SnackBarContext";

const SnackBar = () => {
  const { snackBarState, setSnackBarState, snackBarSeverity, snackBarMessage } =
    useContextSnackBar();

  const handleClose = () => {
    setSnackBarState(false);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Snackbar
        open={snackBarState}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity={snackBarSeverity}
          sx={{ width: "100%", color: "black" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default SnackBar;
