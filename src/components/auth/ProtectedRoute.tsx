import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { TbReceiptEuro } from "react-icons/tb";

interface ProtectedRouteProps {
  requiredRole: "admin" | "user";
  children: React.ReactNode;
}

  function ProtectedRoute( { requiredRole, children }: ProtectedRouteProps) {

    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        const user = auth.currentUser;
        if ( user ) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          
          if ( userData?.role === requiredRole ) {
            setIsAuthorized(true);
          }
        }
        setLoading(false);
      };
      checkAuth();
    }, [requiredRole]);

    if (loading) {
      return <div className="text-center mt-10 text-gray-600">Loading...</div>;
    }

    if (!isAuthorized) {
      return <Navigate to="/login" replace />;
    }

    return <>{children}</>;

  

  
    
  }
  
  export default ProtectedRoute;