// To secure routes of admins
// To make sure that only admins can open a page

import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const AdminRoute = () => {
  const { currentUser, authenticating } = useAuth();
  const [role, setRole] = useState("");
  const [checkingRole, setCheckingRole] = useState(true);

  // Check the if the user is an admin

  useEffect(() => {
    (async () => {
      //To check if there is a current user
      if (currentUser) {
        // To check if already check if the user is an admin
        const docRef = doc(db, "Users", currentUser.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRole(docSnap.data().role);
          // After featching of data is successful remove the loading
          setCheckingRole(false);
        } else {
          console.log("No Data Found");
        }
        // if no current check if it is still fetching the data
      } else if (!authenticating) {
        setCheckingRole(false);
      }
    })();
  }, [currentUser, authenticating]);

  // To return if still authenticating or fetching data to check if admin
  // To display Loading
  if (authenticating || checkingRole) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[#ebf2f3]">
        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        <span>Please wait...</span>
      </div>
    );
  }

  // Check first if there's a current user if none
  // Go to the  welcome it means there it is not log in
  // Else check if the current user is an admin if admin
  // Go to dash else go to apply admin

  return currentUser ? (
    role === "admin" ? (
      <Outlet />
    ) : role === "admin-manager" ? (
      <Navigate to="/addAdmin" />
    ) : (
      <Navigate to="/applyAdmin" />
    )
  ) : (
    <Navigate to="/welcome" />
  );
};
