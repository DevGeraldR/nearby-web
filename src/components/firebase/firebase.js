/**
 * Use for interacting with the firebase(nearby database)
 * It use Firebase authentication(for user login)
 * and firebase firestore(for database)
 */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG920A50-1m4L-o-53rYCrgLXwVDbbGJk",
  authDomain: "nearest-54654.firebaseapp.com",
  projectId: "nearest-54654",
  storageBucket: "nearest-54654.appspot.com",
  messagingSenderId: "676197603125",
  appId: "1:676197603125:web:35ed54b6d271ab34cede7c",
};
let app, auth;
//To check if the app is not yet initialize. Initialize if not. If already initialize use the inilize version
//Initialize auth and db
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app);
} else {
  app = getApp();
  auth = getAuth();
}

export { auth, app };
