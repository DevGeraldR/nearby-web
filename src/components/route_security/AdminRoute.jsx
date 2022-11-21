import { Navigate, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const AdminRoute = () => {
  const { currentUser, authenticating } = useAuth();
  const [isAdmin, setIsAdmin] = useState();
  const [gettingData, setGettingData] = useState(true);

  // Check the if the user is an admin

  useEffect(() => {
    (async () => {
      //To check if there is a current user
      if (currentUser) {
        // To check if already check if the user is an admin
        const docRef = doc(db, "Users", currentUser.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsAdmin(docSnap.data().admin);
          // After featching of data is successful remove the loading
          setGettingData(false);
        } else {
          console.log("No Data Found");
        }
      } else if (!authenticating) {
        setGettingData(false);
      }
    })();
  }, [currentUser, authenticating]);

  if (authenticating) {
    return <h1>Authenticating...</h1>;
  }

  if (gettingData) {
    return <h1>Getting data...</h1>;
  }

  return currentUser ? (
    isAdmin ? (
      <Outlet />
    ) : (
      <Navigate to="/applyAdmin" />
    )
  ) : (
    <Navigate to="/welcome" />
  );
};
