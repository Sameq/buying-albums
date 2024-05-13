import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import AppRoutes from "./Routes/Router.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);
