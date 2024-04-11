// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD05Ky4kP3qLEuWtSCQMLqUdzYk53ylqi8",
  authDomain: "buzzer-app-8f5cb.firebaseapp.com",
  projectId: "buzzer-app-8f5cb",
  storageBucket: "buzzer-app-8f5cb.appspot.com",
  messagingSenderId: "889013006219",
  appId: "1:889013006219:web:2fb764bf0b5bc68a13498e"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);