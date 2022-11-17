import React, { useContext, createContext, useEffect, useState } from "react";
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
  const [currentUser, setCurrentUser] = useState();
  const [from, setFrom] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  async function signIn(email, password) {
    try {
      setFrom("signIn");
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  }

  async function signUp(name, photo, email, password) {
    try {
      setFrom("signUp");
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
        console.error("Error adding document: ", e);
      }
    } catch (error_1) {
      console.log(error_1);
    }
  }

  async function logOut() {
    try {
      setFrom("");
      return await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    currentUser,
    from,
    signIn,
    signUp,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
