import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthState } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { SnackBarState } from "./context/SnackBarContext";
import { LoadState } from "./context/LoadContext";
const clientId =
  "501179525954-ujf85hcbcr17l2e1elem6e1ra4ra55nh.apps.googleusercontent.com";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadState>
        <SnackBarState>
          <AuthState>
            <GoogleOAuthProvider clientId={clientId}>
              <App />
            </GoogleOAuthProvider>
          </AuthState>
        </SnackBarState>
      </LoadState>
    </BrowserRouter>
  </React.StrictMode>
);
