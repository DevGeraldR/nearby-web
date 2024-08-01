/**
 * Use for interacting with the firebase(nearby database)
 * It use Firebase authentication(for user login)
 * and firebase firestore(for database)
 */

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PutYourOwnFirebaseConfig",
  authDomain: "PutYourOwnFirebaseConfig",
  projectId: "PutYourOwnFirebaseConfig",
  storageBucket: "PutYourOwnFirebaseConfig",
  messagingSenderId: "PutYourOwnFirebaseConfig",
  appId: "PutYourOwnFirebaseConfig",
};

let app;
//To check if the app is not yet initialize. Initialize if not. If already initialize use the inilize version
//Initialize auth and db
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
