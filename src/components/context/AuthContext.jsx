import React, { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(); // undifined
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const signUp = async (name, photo, email, password) => {
    //To create the new user in our firebase authentication
    //Then update the user data to save the user photoURL
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = authUser.user;
      updateProfile(user, {
        displayName: name,
        photoURL:
          photo ||
          "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
      }).catch((error) => {
        alert(error.message);
      });
      //To send the user information in our database
      try {
        setDoc(doc(db, "Users", name), {
          name: name,
          email: email,
          admin: false,
          photoURL:
            photo ||
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
        });
      } catch (e) {
        alert("Error adding document: ", e);
      }
    } catch (error_1) {
      alert(error_1.message);
    }
  };

  const logOut = async () => {
    try {
      return await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  const value = {
    currentUser,
    isLoading,
    signIn,
    signUp,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
