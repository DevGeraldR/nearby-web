// To make sure that the user who is not an admin can't enter the admin dashboard
// And make the user apply as admin first

import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const RegistrationRoute = () => {
  const { currentUser, authenticating } = useAuth();
  const [isAdmin, setIsAdmin] = useState();
  const [checkingIfAdmin, setCheckingIfAdmin] = useState(true);

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
          setCheckingIfAdmin(false);
        } else {
          console.log("No Data Found");
        }
        // if no current check if it is still fetching the data
      } else if (!authenticating) {
        setCheckingIfAdmin(false);
      }
    })();
  }, [currentUser, authenticating]);

  // To return if still authenticating or fetching data to check if admin
  // To display Loading
  if (authenticating || checkingIfAdmin) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        <span>Please wait...</span>
      </div>
    );
  }

  //Check first if there is a current user if there's none go to welcome
  //Else check if the current user is an admin if admin direct to the dashboard
  //Else direct to apply admin page

  return currentUser ? (
    isAdmin ? (
      <Navigate to="/" />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to="/welcome" />
  );
};
