import React from "react";
import Home from "./Home";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}
