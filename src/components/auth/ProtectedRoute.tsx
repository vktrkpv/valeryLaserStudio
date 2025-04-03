import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
  }

  function ProtectedRoute({ children }: Props) {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
  
    if (isAdminLoggedIn !== "true") {
      return <Navigate to="/login" />;
    }
  
    return <>{children}</>; 
  }
  
  export default ProtectedRoute;